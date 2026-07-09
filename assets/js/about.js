(function () {
  const E = window.Exterra;
  if (!E) return;

  const faqs = [
    {
      question: "Is Exterra a siding contractor?",
      answer: "No. Exterra is an independent siding provider-matching platform and does not perform siding work directly."
    },
    {
      question: "What does Exterra help homeowners do?",
      answer: "Exterra helps homeowners submit siding project details and compare available local siding provider options in selected markets."
    },
    {
      question: "Who provides final pricing and warranties?",
      answer: "Participating providers independently provide final pricing, scheduling, warranties, licensing, insurance, and service terms."
    },
    {
      question: "Are provider options available everywhere?",
      answer: "No. Availability can vary by location, project type, provider coverage, and timing."
    },
    {
      question: "What should I verify before choosing a provider?",
      answer: "Verify licensing, insurance, references, estimate details, warranties, and final terms directly with the provider."
    }
  ];

  function render() {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    root.innerHTML = `
      ${E.renderHero({
        id: "about",
        image: "assets/images/hero-about.jpg",
        outline: "About",
        title: "About Exterra",
        text: "Exterra helps homeowners organize siding project details and compare available local siding provider options. We are an independent matching platform, not a siding contractor.",
        buttons: [
          { label: "Start A Request", href: "contact.html", variant: "btn-primary" },
          { label: "Compare Services", href: "all-services.html", variant: "btn-ghost" }
        ]
      })}

      <section class="about-story section-pad" aria-labelledby="story-title">
        <div class="container about-story__grid">
          <div class="section-heading" data-aos="fade-right">
            <span class="about-story__label">Independent provider matching</span>
            <span class="eyebrow">Platform story</span>
            <h2 id="story-title">A Cleaner Way To Begin A Siding Search</h2>
            <p>Homeowners often start with scattered notes, uncertain material ideas, and questions about local availability. Exterra creates a clearer first step: submit project details, review available provider options, and decide whether to continue with a provider.</p>
            <p>${E.CFG.legal.shortDisclaimer}</p>
          </div>
          <figure class="image-frame about-story__photo" data-aos="fade-left">
            <img src="assets/images/siding-detail-1.jpg" alt="Modern siding wall with crisp horizontal panels" loading="lazy">
          </figure>
        </div>
      </section>

      <section class="about-growth section-pad" aria-labelledby="about-growth-title">
  <div class="container about-growth__grid">
    <div class="about-growth__media" data-aos="fade-right">
      <figure class="image-frame about-growth__photo about-growth__photo--top">
        <img src="assets/images/hero-home.jpg" alt="Modern siding exterior project detail" loading="lazy">
      </figure>

      <figure class="image-frame about-growth__photo about-growth__photo--bottom">
        <img src="assets/images/siding-detail-2.jpg" alt="Close siding panels and trim detail" loading="lazy">
      </figure>
    </div>

    <div class="about-growth__copy" data-aos="fade-left">
      <span class="eyebrow about-growth__eyebrow">About Exterra</span>
      <h2 id="about-growth-title">How We Help Homeowners Compare Siding Options</h2>

      <p class="about-growth__lead">
        Exterra gives homeowners a clearer way to organize siding project details and review available local provider options before choosing a next step.
      </p>

      <p>
        The platform is designed around practical exterior questions: project type, material direction, timing, location, replacement needs, repair concerns, and provider availability.
      </p>

      <p>
        We do not perform siding work directly. Participating providers remain responsible for their own pricing, scheduling, warranties, licensing, insurance, and final service terms.
      </p>

      <div class="about-growth__note">
        <strong>A clearer matching platform for siding installation, replacement, repair, and material comparison.</strong>
        <span class="about-growth__mark">Exterra</span>
      </div>
    </div>
  </div>
</section>

      <section class="about-service-lines section-pad" aria-labelledby="about-service-lines-title">
  <div class="container">
    <div class="about-service-lines__head" data-aos="fade-up">
      <span class="eyebrow about-service-lines__eyebrow">What homeowners compare</span>
      <h2 id="about-service-lines-title">Siding Service Paths Homeowners Can Review</h2>
      <p>
        Exterra helps homeowners organize siding requests and compare available local provider options across common exterior project categories.
      </p>
    </div>

    <div class="about-service-lines__grid">
      ${[
        ["Siding Installation", "New exterior siding planning for fresh projects and updated curb appeal.", "house-plus", "siding-installation.html"],
        ["Siding Replacement", "Provider options for aging, dated, or worn exterior siding systems.", "replace", "siding-replacement.html"],
        ["Siding Repair", "Request paths for loose panels, cracks, gaps, impact damage, or storm concerns.", "badge-alert", "siding-repair.html"],
        ["Vinyl Siding", "Compare vinyl siding options, durability direction, color planning, and provider fit.", "panel-top", "vinyl-siding.html"],
        ["Fiber Cement Siding", "Review provider paths for fiber cement, heavier exterior materials, and trim details.", "layers", "fiber-cement-siding.html"],
        ["Exterior Trim & Details", "Explore trim, edges, transitions, accents, and related exterior finish planning.", "ruler", "all-services.html"]
      ]
        .map(
          ([title, text, icon, href], index) => `
            <a class="about-service-lines__item" href="${href}" data-aos="fade-up" data-aos-delay="${index * 70}">
              <span class="about-service-lines__icon">${E.icon(icon)}</span>
              <span class="about-service-lines__content">
                <strong>${title}</strong>
                <small>${text}</small>
              </span>
              <span class="about-service-lines__arrow">${E.icon("arrow-down-right")}</span>
            </a>`
        )
        .join("")}
    </div>

    <div class="about-service-lines__action" data-aos="fade-up">
      <a class="about-service-lines__button" href="all-services.html">
        <span>View All Services</span>
        ${E.icon("arrow-down-right")}
      </a>
    </div>
  </div>
</section>

      <section class="about-contrast" aria-labelledby="contrast-title">
        <div class="container about-contrast__grid">
          <article class="about-contrast__panel about-contrast__help" data-aos="fade-up">
            <h2 id="contrast-title">What We Help With</h2>
            <ul>
              ${[
                "Collecting siding project details in one request.",
                "Helping connect homeowners with available local siding companies.",
                "Supporting comparison of scope, material direction, timing, and estimate detail.",
                "Providing clear reminders to verify provider licensing, insurance, and terms."
              ]
                .map((item) => `<li>${E.icon("check-circle-2")}<span>${item}</span></li>`)
                .join("")}
            </ul>
          </article>
          <article class="about-contrast__panel about-contrast__avoid" data-aos="fade-up" data-aos-delay="120">
            <h2>What We Do Not Do</h2>
            <ul>
              ${[
                "Exterra does not perform siding installation, replacement, or repair.",
                "Exterra does not set final provider pricing, schedules, warranties, or service terms.",
                "Exterra does not replace homeowner review of licensing, insurance, references, or agreements.",
                "Exterra does not promise provider availability in every location."
              ]
                .map((item) => `<li>${E.icon("x-circle")}<span>${item}</span></li>`)
                .join("")}
            </ul>
          </article>
        </div>
      </section>

      <section class="about-mission section-pad" aria-labelledby="mission-title">
        <div class="container about-mission__grid">
          <figure class="image-frame about-mission__round" data-aos="zoom-in">
            <img src="assets/images/exterior-home-1.jpg" alt="Exterior home siding viewed from the front" loading="lazy">
          </figure>
          <div data-aos="fade-left">
            <div class="section-heading">
              <span class="eyebrow">Mission</span>
              <h2 id="mission-title">Make Provider Comparison Feel Less Opaque</h2>
              <p>Exterra is built for homeowners who want a practical way to frame a siding request before deciding which provider conversation is worth continuing.</p>
            </div>
            <div class="about-mission__lines" aria-hidden="true"><span></span><span></span><span></span></div>
          </div>
        </div>
      </section>

      <section class="about-flow section-pad" aria-labelledby="flow-title">
        <div class="container">
          <div class="section-heading section-heading--center">
            <span class="eyebrow">How it works</span>
            <h2 id="flow-title">The Matching Flow Works In Four Plain Steps</h2>
          </div>
          <div class="about-flow__steps">
            ${[
              ["Request", "Share the service type, condition notes, material interests, and contact details.", "clipboard-edit"],
              ["Match", "Exterra checks for available provider options in selected local markets.", "workflow"],
              ["Compare", "Review provider fit, scope direction, and next-step details.", "list-checks"],
              ["Decide", "Choose whether to continue directly with a provider.", "arrow-up-right"]
            ]
              .map(
                ([title, text, icon], index) => `
                  <article class="about-flow__step" data-aos="fade-up" data-aos-delay="${index * 70}">
                    ${E.icon(icon)}<h3>${title}</h3><p>${text}</p>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="about-clarity section-pad" aria-labelledby="clarity-title">
        <div class="container about-clarity__grid">
          <figure class="image-frame about-clarity__photo" data-aos="fade-right">
            <img src="assets/images/siding-texture-2.jpg" alt="Close siding texture and exterior finish" loading="lazy">
          </figure>
          <div class="about-clarity__quote" data-aos="fade-left">
            <h2 id="clarity-title">Clarity Starts Before The Estimate</h2>
            <p>A stronger request helps homeowners compare provider communication, material direction, timeline assumptions, and scope details with less guesswork.</p>
            <ul class="about-clarity__list">
              <li>Know the project type before provider conversations begin.</li>
              <li>Describe visible siding condition and material interests.</li>
              <li>Ask providers for final licensing, insurance, warranty, and term details.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="about-factors section-pad" aria-labelledby="factors-title">
        <div class="container about-story__grid">
         <div class="section-heading section-heading--sticky">
  <div data-aos="fade-right">
    <span class="eyebrow">Comparison factors</span>
    <h2 id="factors-title">What To Review Before Choosing A Provider</h2>
    <p>Provider comparison is strongest when the details are specific, visible, and confirmed directly by the participating provider.</p>
  </div>
</div>
          <div data-aos="fade-left">
            ${E.faqMarkup([
              { question: "Scope clarity", answer: "Ask what is included, what is excluded, and what conditions could change the final scope." },
              { question: "Material direction", answer: "Review siding type, trim details, color direction, and product assumptions." },
              { question: "Availability", answer: "Confirm local coverage, schedule windows, and whether your location is in range." },
              { question: "Estimate detail", answer: "Compare line items, access assumptions, disposal, prep, and next-step requirements." },
              { question: "Licensing and insurance verification", answer: "Check provider documentation directly before signing any agreement." }
            ])}
          </div>
        </div>
      </section>

      <section class="about-route section-pad-sm" aria-labelledby="route-title">
        <div class="container about-route__strip">
          <div>
            <span class="eyebrow">Next route</span>
            <h2 id="route-title">Contact Or Review Service Paths</h2>
          </div>
          <div class="about-route__links">
            <a class="btn btn-primary" href="contact.html"><span>Start Request</span>${E.icon("arrow-up-right")}</a>
            <a class="btn btn-light" href="all-services.html"><span>All Services</span>${E.icon("arrow-up-right")}</a>
          </div>
        </div>
      </section>

      ${E.renderGlobalCta({
        id: "about-cta",
        title: "Ready To Compare Provider Options?",
        text: "Submit your siding project details and review available local options before deciding how to move forward."
      })}
    `;

    E.addFaqSchema(faqs);
    E.pageReady();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
