(function () {
  const E = window.Exterra;
  if (!E) return;

  const faqs = [
    {
      question: "Does Exterra provide siding services directly?",
      answer: "No. Exterra is an independent provider-matching platform. Siding work, pricing, scheduling, warranties, and terms are provided by participating providers."
    },
    {
      question: "Which siding service should I choose?",
      answer: "Choose the page that best matches your current project goal. If you are unsure, use the contact form and describe the condition, material interests, and timeline."
    },
    {
      question: "Can provider options vary by service type?",
      answer: "Yes. Availability can vary by location, material direction, project scope, and participating provider coverage."
    },
    {
      question: "Can I compare material options?",
      answer: "Yes. The request can include material interests such as vinyl, fiber cement, composite, wood-look siding, trim, or color direction."
    },
    {
      question: "Should I review provider credentials?",
      answer: "Yes. Homeowners should verify licensing, insurance, references, warranty details, and final terms directly with any provider."
    }
  ];

  const materials = [
    ["Vinyl", "Practical, low-maintenance siding paths for many exterior updates.", "layers"],
    ["Fiber Cement", "Durable siding direction often compared for long-term exterior plans.", "shield-check"],
    ["Composite", "Wood-look or mixed-material options for more character-driven facades.", "panel-top"],
    ["Exterior Trim", "Corners, windows, soffit, fascia, and transition details that shape scope.", "scan-line"]
  ];

  function render() {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    root.innerHTML = `
      ${E.renderHero({
        id: "services",
        image: "assets/images/hero-services.jpg",
        outline: "Services",
        title: "Compare Siding Service Options",
        text: "Submit your siding project details and review available local provider options. Exterra is an independent matching platform, not a siding contractor.",
        buttons: [
          { label: "Start Your Request", href: "contact.html", variant: "btn-primary" },
          { label: "About Exterra", href: "about.html", variant: "btn-ghost" }
        ]
      })}

      <section class="services-intro section-pad-sm" aria-labelledby="services-intro-title">
        <div class="container services-intro__strip">
          ${[
            ["Request", "Submit siding project details, material interests, and contact information.", "clipboard-edit"],
            ["Compare", "Review available local provider options where matching is available.", "list-checks"],
            ["Choose", "Decide whether to continue with a provider after confirming details.", "arrow-up-right"]
          ]
            .map(
              ([title, text, icon], index) => `
                <article class="services-intro__item" data-aos="fade-up" data-aos-delay="${index * 80}">
                  ${E.icon(icon)}
                  <div><h2 id="${index === 0 ? "services-intro-title" : ""}">${title}</h2><p>${text}</p></div>
                </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="services-about section-pad" aria-labelledby="services-about-title">
  <div class="container services-about__grid">
    <div class="services-about__copy" data-aos="fade-right">
      <span class="eyebrow services-about__eyebrow">About service matching</span>
      <h2 id="services-about-title">A clearer way to review siding service paths</h2>

      <p class="services-about__lead">
        Exterra helps homeowners understand common siding project categories before comparing available local provider options.
      </p>

      <p>
        Whether your request is focused on new siding, replacement, repair, vinyl, fiber cement, or exterior trim details, the platform helps organize the first step with clearer project information.
      </p>

      <p>
        Exterra does not perform siding work directly. Participating providers independently handle final pricing, scheduling, warranties, licensing, insurance, and service terms.
      </p>

      <a class="services-about__link" href="contact.html">
        <span>Start Your Request</span>
        ${E.icon("arrow-down-right")}
      </a>
    </div>

    <div class="services-about__stats" data-aos="fade-left">
      <article class="services-about__stat">
        <strong>0 6</strong>
        <span>Service paths</span>
      </article>

      <article class="services-about__stat">
        <strong>0 3</strong>
        <span>Simple comparison steps</span>
      </article>
    </div>
  </div>
</section>

      <section class="services-switcher section-pad" aria-labelledby="switcher-title">
        <div class="container services-switcher__grid">
          <figure class="image-frame services-switcher__image" data-service-switch-image data-aos="fade-right">
            <img src="${E.services[0].image}" alt="${E.escapeHtml(E.services[0].name)} siding option" loading="lazy">
          </figure>
          <div class="services-switcher__list" data-aos="fade-left">
            <div class="section-heading">
              <span class="eyebrow">Interactive comparison</span>
              <h2 id="switcher-title">Preview Service Directions</h2>
            </div>
            ${E.services
              .map(
                (service, index) => `
                  <button class="services-switcher__button${index === 0 ? " is-active" : ""}" type="button" data-service-switch="${index}">
                    ${E.icon(service.icon || "panel-top")}<span>${E.escapeHtml(service.name)}</span>
                  </button>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="services-fit section-pad" aria-labelledby="fit-title">
        <div class="container">
          <span class="eyebrow">Provider fit</span>
          <h2 id="fit-title">What To Compare Before Choosing A Provider</h2>
          <div class="services-fit__list">
            ${[
              ["Scope assumptions", "Compare what each provider includes, excludes, and needs to verify on-site."],
              ["Material path", "Review product direction, trim details, color expectations, and replacement depth."],
              ["Timeline", "Ask how provider availability lines up with your preferred timing."],
              ["Estimate detail", "Look for clear next steps, written assumptions, and provider-specific terms."]
            ]
              .map(
                ([title, text], index) => `
                  <article class="services-fit__item" data-aos="fade-up" data-aos-delay="${index * 70}">
                    <h3>${title}</h3><p>${text}</p>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="services-faq section-pad" aria-labelledby="services-faq-title">
        <div class="container about-story__grid">
          <div class="section-heading">
            <span class="eyebrow">FAQ</span>
            <h2 id="services-faq-title">Services FAQs</h2>
          </div>
          <div>${E.faqMarkup(faqs)}</div>
        </div>
      </section>

      <section class="services-disclaimer section-pad-sm" aria-labelledby="service-disclaimer-title">
        <div class="container">
          <div class="services-disclaimer__box" data-aos="fade-up">
            ${E.icon("info")}
            <div>
              <h2 id="service-disclaimer-title">Independent Provider-Matching Platform</h2>
              <p>Exterra is not a siding contractor and does not perform siding work directly. Final pricing, scheduling, warranties, licensing, insurance, and service terms are provided by participating providers.</p>
            </div>
          </div>
        </div>
      </section>

      ${E.renderGlobalCta({
        id: "services-cta",
        title: "Ready To Compare Siding Provider Options?",
        text: "Submit your project details and review available local options before deciding how to move forward.",
        buttons: [
          { label: "Start Your Request", href: "contact.html", variant: "btn-primary" },
          { label: "View About Exterra", href: "about.html", variant: "btn-ghost" }
        ]
      })}
    `;

    bindSwitcher();
    initSwiper();
    E.addFaqSchema(faqs);
    E.pageReady();
  }

  function bindSwitcher() {
    const buttons = document.querySelectorAll("[data-service-switch]");
    const imageFrame = document.querySelector("[data-service-switch-image]");
    if (!buttons.length || !imageFrame) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const service = E.services[Number(button.dataset.serviceSwitch)];
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        imageFrame.innerHTML = `<a href="${service.url}"><img src="${service.image}" alt="${E.escapeHtml(service.name)} siding option" loading="lazy"></a>`;
        E.pageReady();
      });
    });

    imageFrame.addEventListener("click", () => {
      const active = document.querySelector("[data-service-switch].is-active");
      const service = E.services[Number(active ? active.dataset.serviceSwitch : 0)];
      window.location.href = service.url;
    });
  }

  function initSwiper() {
    if (!window.Swiper) return;
    new window.Swiper(".services-path-swiper", {
      slidesPerView: 1.05,
      spaceBetween: 18,
      navigation: {
        nextEl: ".services-next",
        prevEl: ".services-prev"
      },
      breakpoints: {
        720: { slidesPerView: 2.1 },
        1060: { slidesPerView: 3.2 }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
