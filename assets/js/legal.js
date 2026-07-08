(function () {
  const E = window.Exterra;
  if (!E) return;

  const pages = {
    "privacy-policy": {
      title: "Privacy Policy",
      intro: "This Privacy Policy explains how Exterra collects and uses request information for its independent siding provider-matching platform.",
      sections: [
        {
          title: "Information We Collect",
          body: [
            "We may collect contact details, siding project details, service interests, location notes, communication preferences, and technical information such as browser, device, cookie preference, and page interaction data.",
            "If you submit a request, your information may be used to help connect you with participating siding providers in selected local markets."
          ]
        },
        {
          title: "How Information Is Used",
          body: [
            "We use information to process requests, support provider matching, communicate with you, improve site usability, prevent spam or abuse, and maintain compliance records.",
            "Exterra does not perform siding work directly. Participating providers independently provide final pricing, scheduling, warranties, licensing, insurance, and service terms."
          ]
        },
        {
          title: "Sharing With Providers",
          body: [
            "Request data may be shared with participating providers when it is reasonably relevant to matching your siding project request.",
            "Homeowners are responsible for verifying provider credentials, insurance, references, estimates, warranties, and final agreements."
          ]
        },
        {
          title: "Cookies And Local Storage",
          body: [
            "The site may use localStorage to remember cookie consent choices and may use cookies or similar technologies for essential functionality, preferences, security, analytics, and site improvement.",
            "You may accept or decline non-essential cookie storage through the cookie banner. Browser settings may also allow you to control cookies."
          ]
        },
        {
          title: "Data Security And Retention",
          body: [
            "We use reasonable administrative, technical, and organizational safeguards, but no online system can be guaranteed to be completely secure.",
            "Information may be retained as long as reasonably necessary for request handling, legal compliance, dispute prevention, and operational needs."
          ]
        },
        {
          title: "Your Choices",
          body: [
            "You may contact Exterra at hello@exterra.com to request access, correction, or deletion of certain information, subject to legal and operational limits.",
            "You can also choose not to submit a request or decline optional cookie storage."
          ]
        }
      ]
    },
    "terms-of-service": {
      title: "Terms of Service",
      intro: "These Terms govern use of the Exterra website and provider-matching request flow.",
      sections: [
        {
          title: "Platform Role",
          body: [
            "Exterra is an independent siding provider-matching platform. Exterra is not a siding contractor and does not perform siding installation, replacement, repair, inspection, or related siding work directly.",
            "The website helps homeowners submit siding project details and compare available local provider options where matching is available."
          ]
        },
        {
          title: "Provider Relationship",
          body: [
            "Participating providers are independent businesses. Any services, estimates, agreements, pricing, scheduling, warranties, licensing, insurance, and service terms are provided by the participating provider, not Exterra.",
            "You are responsible for reviewing and verifying a provider before agreeing to any work."
          ]
        },
        {
          title: "No Availability Or Outcome Promise",
          body: [
            "Exterra does not promise that provider options will be available in every location or for every project type.",
            "Exterra does not guarantee pricing, availability, licensing, insurance, warranties, provider performance, project outcomes, or final terms."
          ]
        },
        {
          title: "User Responsibilities",
          body: [
            "You agree to provide accurate request information, use the website lawfully, avoid spam or abusive submissions, and independently evaluate any provider.",
            "You should obtain written estimates and verify licensing, insurance, references, warranty details, and final terms before proceeding with a provider."
          ]
        },
        {
          title: "Website Content",
          body: [
            "Website content is provided for general informational and matching-platform purposes only. It is not professional, legal, construction, or project-specific advice.",
            "Images on this site may depict models, staged scenes, or illustrative exterior examples and should not be treated as provider documentation."
          ]
        },
        {
          title: "Limitation Of Liability",
          body: [
            "To the maximum extent allowed by law, Exterra is not liable for provider acts or omissions, project disputes, service quality, pricing, delays, warranties, damages, or outcomes related to independent providers.",
            "Your use of the site is at your own discretion and subject to these Terms."
          ]
        }
      ]
    },
    "cookie-policy": {
      title: "Cookie Policy",
      intro: "This Cookie Policy explains how Exterra uses cookies, localStorage, and similar technologies on its siding provider-matching website.",
      sections: [
        {
          title: "What Cookies And Local Storage Do",
          body: [
            "Cookies and localStorage can help a website remember preferences, support security, measure usage, and keep basic interface choices consistent.",
            "Exterra uses localStorage to remember whether you accepted or declined the cookie banner."
          ]
        },
        {
          title: "Types Of Storage We May Use",
          body: [
            "Essential storage supports core site functionality, form protection, consent choices, and navigation behavior.",
            "Preference or analytics storage may help us understand site performance and improve the provider-matching experience, where allowed."
          ]
        },
        {
          title: "Managing Preferences",
          body: [
            "The cookie banner remains visible until you choose Accept or Decline. Your choice is saved in localStorage on the browser you used.",
            "You can clear browser storage or adjust browser settings to remove or block cookies and localStorage."
          ]
        },
        {
          title: "Provider Matching And Requests",
          body: [
            "Cookie choices do not replace the privacy consent required when submitting a siding request.",
            "Request information may still be used to help connect you with participating providers when you submit the contact form."
          ]
        },
        {
          title: "No Hidden Redirects Or Cloaking",
          body: [
            "Exterra does not use the cookie banner for hidden redirects, cloaking, or deceptive navigation.",
            "The website is intended to clearly represent Exterra as an independent provider-matching platform."
          ]
        }
      ]
    }
  };

  function render() {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;
    const slug = document.body.dataset.legal || "privacy-policy";
    const page = pages[slug] || pages["privacy-policy"];

    root.innerHTML = `
      <section class="legal-hero" aria-labelledby="legal-title">
        <div class="container">
          <span class="eyebrow">${E.escapeHtml(E.CFG.brand.tagline)}</span>
          <h1 id="legal-title">${E.escapeHtml(page.title)}</h1>
          <p>${E.escapeHtml(page.intro)}</p>
        </div>
      </section>

      <section class="legal-content section-pad" aria-labelledby="legal-content-title">
        <div class="container legal-content__grid">
          <nav class="legal-content__nav" aria-label="${E.escapeHtml(page.title)} sections">
            <a href="#overview" id="legal-content-title">Overview</a>
            ${page.sections.map((section, index) => `<a href="#legal-section-${index}">${E.escapeHtml(section.title)}</a>`).join("")}
            <a href="#required-disclaimer">Disclaimer</a>
          </nav>
          <article class="legal-article">
            <section id="overview">
              <h2>Provider Matching Overview</h2>
              <p>${E.escapeHtml(E.CFG.footer.description)}</p>
              <p>${E.escapeHtml(E.CFG.legal.shortDisclaimer)}</p>
            </section>
            ${page.sections
              .map(
                (section, index) => `
                  <section id="legal-section-${index}">
                    <h2>${E.escapeHtml(section.title)}</h2>
                    ${section.body.map((paragraph) => `<p>${E.escapeHtml(paragraph)}</p>`).join("")}
                  </section>`
              )
              .join("")}
            <section id="required-disclaimer">
              <h2>Required Disclaimer</h2>
              <p class="legal-disclaimer">${E.escapeHtml(E.CFG.legal.fullDisclaimer)}</p>
            </section>
          </article>
        </div>
      </section>

      ${E.renderGlobalCta({
        id: `${slug}-cta`,
        title: "Ready To Compare Siding Provider Options?",
        text: "Submit your project details and review available local options before deciding how to move forward.",
        buttons: [
          { label: "Start Your Request", href: "contact.html", variant: "btn-primary" },
          { label: "View Services", href: "all-services.html", variant: "btn-ghost" }
        ]
      })}
    `;

    E.pageReady();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
