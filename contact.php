<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(bool $success, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Please submit the contact form to send a request.', 405);
}

function clean_value(string $key, int $maxLength = 2000): string
{
    $value = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $value = str_replace(["\r", "\0"], '', $value);
    $value = strip_tags($value);
    if (strlen($value) > $maxLength) {
        $value = substr($value, 0, $maxLength);
    }
    return $value;
}

$honeypot = clean_value('website', 120);
if ($honeypot !== '') {
    respond(false, 'Please check the required fields and try again.', 400);
}

$fullName = clean_value('fullName', 160);
$email = clean_value('email', 220);
$phone = clean_value('phone', 80);
$service = clean_value('service', 160);
$message = clean_value('message', 3000);
$sourcePage = clean_value('sourcePage', 300);
$privacyConsent = isset($_POST['privacyConsent']) && (string) $_POST['privacyConsent'] === 'yes';

$allowedServices = [
    'Siding Installation',
    'Siding Replacement',
    'Siding Repair',
    'Vinyl Siding',
    'Fiber Cement Siding',
    'Wood & Composite Siding',
];

if ($fullName === '' || $email === '' || $phone === '' || $service === '' || $message === '' || !$privacyConsent) {
    respond(false, 'Please check the required fields and try again.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}

if (!in_array($service, $allowedServices, true)) {
    respond(false, 'Please choose a valid siding service.', 422);
}

$recipient = 'hello@exterra.com';
$subject = 'New Exterra siding request';
$safeEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
$bodyLines = [
    'New siding provider-matching request',
    '',
    'Name: ' . $fullName,
    'Email: ' . $safeEmail,
    'Phone: ' . $phone,
    'Service: ' . $service,
    'Source page: ' . ($sourcePage !== '' ? $sourcePage : 'Not provided'),
    '',
    'Message:',
    $message,
    '',
    'Consent: The user agreed that Exterra may use request details to help connect them with participating siding providers.',
    '',
    'Platform note: Exterra is an independent siding provider-matching platform and does not perform siding work directly.',
];

$headers = [
    'From: Exterra Website <hello@exterra.com>',
    'Reply-To: ' . $safeEmail,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($recipient, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'Your request could not be sent from this server. Please email hello@exterra.com or try again later.', 500);
}

respond(true, 'Thank you. Your request has been received.');
