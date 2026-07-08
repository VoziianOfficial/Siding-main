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

      <section class="services-showcase section-pad" aria-labelledby="showcase-title">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Service paths</span>
            <h2 id="showcase-title">Find The Siding Category Closest To Your Project</h2>
          </div>
          <div class="services-showcase__grid">
            ${E.services
              .map(
                (service, index) => `
                  <a class="services-showcase__card" href="${service.url}" data-aos="fade-up" data-aos-delay="${index * 60}">
                    <img src="${service.image}" alt="${E.escapeHtml(service.name)} siding project visual" loading="lazy">
                    <div class="services-showcase__content">
                      <h2>${E.escapeHtml(service.name)}</h2>
                      <p>${E.escapeHtml(service.short)}</p>
                      <span>Review options</span>
                    </div>
                  </a>`
              )
              .join("")}
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

      <section class="services-material section-pad" aria-labelledby="material-title">
        <div class="container">
          <div class="section-heading section-heading--center">
            <span class="eyebrow">Material comparison</span>
            <h2 id="material-title">Common Siding Directions To Discuss</h2>
          </div>
          <div class="services-material__band">
            ${materials
              .map(
                ([title, text, icon], index) => `
                  <article class="services-material__item" data-aos="fade-up" data-aos-delay="${index * 70}">
                    <span class="icon-line">${E.icon(icon)}</span>
                    <h3>${title}</h3>
                    <p>${text}</p>
                  </article>`
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

      <section class="services-slider section-pad" aria-labelledby="path-slider-title">
        <div class="container">
          <div class="home-slider__top">
            <div class="section-heading">
              <span class="eyebrow">Service path slider</span>
              <h2 id="path-slider-title">Swipe Through Siding Options</h2>
            </div>
            <div class="home-slider__controls">
              <button class="icon-button services-prev" type="button" aria-label="Previous service">${E.icon("arrow-left")}</button>
              <button class="icon-button services-next" type="button" aria-label="Next service">${E.icon("arrow-right")}</button>
            </div>
          </div>
          <div class="swiper services-path-swiper">
            <div class="swiper-wrapper">
              ${E.services
                .map(
                  (service) => `
                    <div class="swiper-slide">
                      <a class="services-slider__card" href="${service.url}">
                        <img src="${service.image}" alt="${E.escapeHtml(service.name)} visual" loading="lazy">
                        <div class="services-slider__copy"><h3>${E.escapeHtml(service.name)}</h3><p>${E.escapeHtml(service.short)}</p></div>
                      </a>
                    </div>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="services-editorial section-pad" aria-labelledby="editorial-title">
        <div class="container services-editorial__grid">
          <div class="section-heading" data-aos="fade-right">
            <span class="eyebrow">Editorial view</span>
            <h2 id="editorial-title">A Better Request Helps Providers Understand The Project</h2>
            <p>Share visible condition, location, material direction, and timing so available provider options can be compared with more context.</p>
          </div>
          <div class="services-editorial__photos" data-aos="fade-left">
            <figure class="image-frame services-editorial__photo-a"><img src="assets/images/siding-detail-3.jpg" alt="Detailed siding and trim view" loading="lazy"></figure>
            <figure class="image-frame services-editorial__photo-b"><img src="assets/images/exterior-home-1.jpg" alt="Home exterior with updated siding" loading="lazy"></figure>
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
