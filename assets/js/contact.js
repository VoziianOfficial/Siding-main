(function () {
  const E = window.Exterra;
  if (!E) return;

  const faqs = [
    {
      question: "Does submitting a request book siding work?",
      answer: "No. Submitting a request starts the matching process. You decide whether to continue after reviewing provider options and provider-specific details."
    },
    {
      question: "Will Exterra perform the siding work?",
      answer: "No. Exterra is an independent siding provider-matching platform and does not perform siding work directly."
    },
    {
      question: "What information should I include?",
      answer: "Include the service type, visible siding condition, material interests, timeline, and any details that may help providers understand the request."
    },
    {
      question: "Is provider availability guaranteed?",
      answer: "No. Availability may vary by location, project type, timing, and participating provider coverage."
    },
    {
      question: "Who provides final pricing and service terms?",
      answer: "Participating providers independently provide final pricing, scheduling, warranties, licensing, insurance, and service terms."
    }
  ];

  function render() {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    root.innerHTML = `
      ${E.renderHero({
        id: "contact",
        image: "assets/images/hero-contact.jpg",
        outline: "Request",
        title: "Start Your Siding Request",
        text: "Submit your siding project details so Exterra can help you review available local siding provider options. Exterra is not a siding contractor.",
        buttons: [
          { label: "Use Contact Form", href: "#contact-form", variant: "btn-primary" },
          { label: "View Services", href: "all-services.html", variant: "btn-ghost" }
        ]
      })}

      <section class="contact-guidance section-pad" aria-labelledby="contact-guidance-title">
  <div class="container contact-guidance__grid">
    <figure class="image-frame contact-guidance__photo" data-aos="fade-right">
      <img src="assets/images/card-4.jpg" alt="Homeowner reviewing siding project details" loading="lazy">
    </figure>

    <div class="contact-guidance__copy" data-aos="fade-left">
      <span class="eyebrow contact-guidance__eyebrow">Contact Exterra</span>
      <h2 id="contact-guidance-title">Send your siding request with clear project details</h2>

      <p class="contact-guidance__lead">
        Exterra helps homeowners organize a siding request before comparing available local provider options.
      </p>

      <p>
        Use the contact page to share your project type, material interests, timing, and any visible exterior concerns. Clear request details can help make the next step more focused.
      </p>

      <p>
        Exterra does not perform siding work directly. Participating providers independently manage their own pricing, scheduling, warranties, licensing, insurance, and final service terms.
      </p>

      <div class="contact-guidance__points">
        <div class="contact-guidance__point">
          ${E.icon("check-circle-2")}
          <span>Share project type and exterior concerns</span>
        </div>
        <div class="contact-guidance__point">
          ${E.icon("check-circle-2")}
          <span>Include material direction if known</span>
        </div>
        <div class="contact-guidance__point">
          ${E.icon("check-circle-2")}
          <span>Review available provider options</span>
        </div>
        <div class="contact-guidance__point">
          ${E.icon("check-circle-2")}
          <span>Choose whether to continue after review</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <section class="contact-form section-pad" id="contact-form" aria-labelledby="form-title">
        <div class="container">
          <div class="contact-form__grid">
            <aside class="contact-form__info" data-aos="fade-right">
              <div>
                <span class="eyebrow">Project details</span>
                <h2 id="form-title">Tell Us What You Want To Compare</h2>
                <p>Share enough detail to help route your request toward available local siding provider options.</p>
              </div>
              <ul class="contact-form__info-list">
                <li>${E.icon("check-circle-2")}<span>No direct siding work by Exterra.</span></li>
                <li>${E.icon("check-circle-2")}<span>Final terms are provided by participating providers.</span></li>
                <li>${E.icon("check-circle-2")}<span>Homeowners should verify licensing and insurance.</span></li>
              </ul>
            </aside>
            <div class="contact-form__panel" data-aos="fade-left">
              <form class="form-grid" method="POST" action="${E.CFG.form.endpoint}" data-contact-form novalidate>
                <div class="contact-form__row">
                  <div class="field">
                    <label for="fullName">Full name</label>
                    <input id="fullName" name="fullName" type="text" autocomplete="name" required>
                  </div>
                  <div class="field">
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" autocomplete="email" required>
                  </div>
                </div>
                <div class="contact-form__row">
                  <div class="field">
                    <label for="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autocomplete="tel" required>
                  </div>
                  <div class="field">
                    <label for="service">Service interest</label>
                    <select id="service" name="service" required>
                      <option value="">Choose a service</option>
                      ${E.serviceOptions()}
                    </select>
                  </div>
                </div>
                <div class="field">
                  <label for="message">Project details</label>
                  <textarea id="message" name="message" required placeholder="Describe the siding condition, material interests, timing, and location notes."></textarea>
                </div>
                <input type="hidden" name="sourcePage" value="${E.escapeHtml(window.location.pathname || "contact.html")}">
                <div class="honeypot" aria-hidden="true">
                  <label for="website">Website</label>
                  <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
                </div>
                <label class="checkbox-field">
                  <input name="privacyConsent" type="checkbox" value="yes" required>
                  <span>I agree that Exterra may use my request details to help connect me with participating siding providers. I understand Exterra does not perform siding work directly.</span>
                </label>
                <p class="mini-disclaimer">${E.CFG.legal.shortDisclaimer}</p>
                <div class="form-status" role="status" aria-live="polite" data-form-status></div>
                <button class="btn btn-primary" type="submit"><span>Submit Project Details</span>${E.icon("arrow-up-right")}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-steps section-pad" aria-labelledby="after-title">
        <div class="container">
          <div class="section-heading section-heading--center">
            <span class="eyebrow">After submit</span>
            <h2 id="after-title">What Happens After You Submit</h2>
          </div>
          <div class="contact-steps__grid">
            ${[
              ["Request Review", "Your siding details help identify the relevant provider category."],
              ["Provider Options", "Available local provider options may be shared where matching is available."],
              ["Direct Confirmation", "You confirm pricing, timing, licensing, insurance, and terms with the provider."]
            ]
              .map(
                ([title, text], index) => `
                  <article class="contact-steps__item" data-aos="fade-up" data-aos-delay="${index * 80}">
                    <h2>${title}</h2><p>${text}</p>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="contact-tips section-pad" aria-labelledby="tips-title">
        <div class="container contact-tips__grid">
          <figure class="image-frame contact-tips__round" data-aos="zoom-in">
            <img src="assets/images/card-3.jpg" alt="Close siding detail for request planning" loading="lazy">
          </figure>
          <div data-aos="fade-left">
            <div class="section-heading">
              <span class="eyebrow">Request tips</span>
              <h2 id="tips-title">Details That Make A Request Easier To Compare</h2>
            </div>
            <ul class="contact-tips__list">
              <li>Describe the siding type or material direction if known.</li>
              <li>Note visible issues such as cracks, loose panels, fading, or moisture concerns.</li>
              <li>Share whether the project is full replacement, localized repair, or material comparison.</li>
              <li>Ask providers to confirm licensing, insurance, warranties, and written terms.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="contact-availability section-pad-sm" aria-labelledby="availability-title">
        <div class="container">
          <div class="contact-availability__box" data-aos="fade-up">
            ${E.icon("map-pin")}
            <div>
              <h2 id="availability-title">Service Area And Availability Note</h2>
              <p>Exterra supports selected local markets. Provider options may vary by location, project type, material direction, and participating provider availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-faq section-pad" aria-labelledby="contact-faq-title">
        <div class="container about-story__grid">
          <div class="section-heading">
            <span class="eyebrow">FAQ</span>
            <h2 id="contact-faq-title">Request FAQs</h2>
          </div>
          <div>${E.faqMarkup(faqs)}</div>
        </div>
      </section>

      ${E.renderGlobalCta({
        id: "contact-cta",
        title: "Review Service Paths Before You Submit",
        text: "Not sure which request type fits? Compare siding service categories and come back with clearer details.",
        buttons: [
          { label: "Compare Services", href: "all-services.html", variant: "btn-primary" },
          { label: "About Exterra", href: "about.html", variant: "btn-ghost" }
        ]
      })}
    `;

    bindForm();
    E.addFaqSchema(faqs);
    E.pageReady();
  }

  function bindForm() {
    const form = document.querySelector("[data-contact-form]");
    const status = document.querySelector("[data-form-status]");
    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      if (!form.checkValidity()) {
        status.classList.add("is-error");
        status.textContent = "Please check the required fields and try again.";
        form.reportValidity();
        return;
      }

      const submit = form.querySelector("button[type='submit']");
      if (submit) submit.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        const data = await response.json();
        status.classList.add(data.success ? "is-success" : "is-error");
        status.textContent = data.message || (data.success ? "Thank you. Your request has been received." : "Please check the required fields and try again.");
        if (data.success) form.reset();
      } catch (error) {
        status.classList.add("is-error");
        status.textContent = "The request could not be sent from this page. Please try again through a web server or email hello@exterra.com.";
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
