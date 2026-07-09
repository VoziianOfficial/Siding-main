(function () {
  const E = window.Exterra;
  if (!E) return;

  const faqs = [
    {
      question: "Does Exterra perform siding work directly?",
      answer: "No. Exterra is an independent siding provider-matching platform. Participating providers handle their own pricing, scheduling, warranties, licensing, insurance, and service terms."
    },
    {
      question: "What happens after I submit a request?",
      answer: "Your siding project details are reviewed for matching purposes, and available local provider options may be presented so you can decide whether to continue with a provider."
    },
    {
      question: "Can I compare more than one provider?",
      answer: "Where availability allows, homeowners may review more than one local siding provider option before choosing a next step."
    },
    {
      question: "What affects siding project pricing?",
      answer: "Pricing can depend on material direction, home size, existing siding condition, access, trim details, timeline, and provider-specific terms."
    },
    {
      question: "Should I verify licensing and insurance?",
      answer: "Yes. Homeowners should verify licensing, insurance, warranties, references, and final service terms directly with any provider before agreeing to work."
    }
  ];

  const tabData = [
    {
      title: "Project Scope",
      icon: "clipboard-list",
      image: "assets/images/siding-detail-1.jpg",
      text: "Clarify whether your request is focused on new siding, replacement, localized damage, trim, or material comparison."
    },
    {
      title: "Material Preference",
      icon: "layers",
      image: "assets/images/siding-texture-1.jpg",
      text: "Share whether vinyl, fiber cement, composite, wood-look, or another direction feels closest to your exterior goals."
    },
    {
      title: "Timeline",
      icon: "calendar-clock",
      image: "assets/images/exterior-home-1.jpg",
      text: "Provider availability can vary, so a preferred timeframe helps align your request with practical local options."
    },
    {
      title: "Local Availability",
      icon: "map-pin",
      image: "assets/images/exterior-home-2.jpg",
      text: "Matching depends on location and participating provider coverage in selected local markets."
    },
    {
      title: "Estimate Detail",
      icon: "file-search",
      image: "assets/images/siding-detail-2.jpg",
      text: "Compare how providers describe materials, scope assumptions, exclusions, and next-step requirements."
    }
  ];

  function serviceSlides() {
    return E.services
      .map(
        (service, index) => `
          <div class="swiper-slide">
            <a class="home-service-card" href="${service.url}" data-aos="fade-up" data-aos-delay="${index * 70}">
              <img src="${service.image}" alt="${E.escapeHtml(service.name)} exterior siding example" loading="lazy">
              <span class="home-service-card__number">${String(index + 1).padStart(2, "0")}</span>
              <div class="home-service-card__content">
                <h3>${E.escapeHtml(service.name)}</h3>
                <p>${E.escapeHtml(service.short)}</p>
              </div>
            </a>
          </div>`
      )
      .join("");
  }

  function render() {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    root.innerHTML = `
      ${E.renderHero({
        id: "home",
        className: "home-hero",
        image: "assets/images/hero-home.jpg",
        outline: "Siding",
        title: "Compare Siding Provider Options",
        titleLines: ["Compare Siding", "Provider Options",],
        text: "Exterra helps homeowners submit siding project details and review available local siding provider options. We are an independent matching platform, not a siding contractor.",
        buttons: [
          { label: "Start Your Request", href: "contact.html", variant: "btn-primary" },
          { label: "View Services", href: "all-services.html", variant: "btn-ghost" }
        ],
        search: {
          placeholder: "Search siding installation, repair, vinyl...",
          button: "Search"
        },
        tags: [
          { label: "Installation", href: "siding-installation.html" },
          { label: "Replacement", href: "siding-replacement.html" },
          { label: "Repair", href: "siding-repair.html" },
          { label: "Vinyl", href: "vinyl-siding.html" }
        ]
      })}

      <section class="home-intent section-pad-sm" aria-labelledby="intent-title">
        <div class="container">
          <div class="home-intent__grid">
            ${[
              ["New Siding", "Share project goals and compare local provider options for a fresh exterior direction.", "house-plus", "siding-installation.html"],
              ["Replace Old Siding", "Review providers for aging panels, dated exterior materials, or broader replacement planning.", "replace", "siding-replacement.html"],
              ["Repair Damage", "Find siding companies that may address gaps, loose panels, cracks, or storm-related concerns.", "badge-alert", "siding-repair.html"],
              ["Compare Materials", "Explore vinyl, fiber cement, composite, and wood-look siding paths before deciding.", "layers", "all-services.html"]
            ]
              .map(
                ([title, text, icon, href], index) => `
                  <article class="home-intent__item" data-aos="fade-up" data-aos-delay="${index * 70}">
                    ${E.icon(icon)}
                    <h2 id="${index === 0 ? "intent-title" : ""}">${title}</h2>
                    <p>${text}</p>
                    <a href="${href}">Explore options</a>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="home-intro section-pad" aria-labelledby="intro-title">
        <div class="container home-intro__grid">
          <div class="home-intro__media" data-aos="fade-right">
            <figure class="image-frame home-intro__photo-main"><img src="assets/images/exterior-home-1.jpg" alt="Modern home exterior with horizontal siding" loading="lazy"></figure>
            <figure class="image-frame home-intro__photo-round"><img src="assets/images/siding-detail-1.jpg" alt="Close view of siding panels and trim" loading="lazy"></figure>
            <div class="home-intro__badge">Independent matching for selected local markets</div>
          </div>
          <div class="home-intro__copy section-heading" data-aos="fade-left">
            <span class="outline-word" aria-hidden="true">Exterra</span>
            <span class="eyebrow">Platform clarity</span>
            <h2 id="intro-title">Built To Make Siding Provider Comparison Easier</h2>
            <p>Exterra helps homeowners organize a siding request, connect with available local siding companies, and review provider options before deciding how to move forward.</p>
            <div class="home-intro__bullets">
              ${[
                ["Send a clear request", "Submit service type, material interests, timing, and project notes."],
                ["Review available options", "Provider options depend on location, scope, and participating company availability."],
                ["Choose your next step", "You decide whether to continue after reviewing provider details directly."]
              ]
                .map(
                  ([title, text]) => `
                    <div class="home-intro__bullet">
                      ${E.icon("check-circle-2")}
                      <div><strong>${title}</strong><p>${text}</p></div>
                    </div>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="home-use section-pad" aria-labelledby="home-use-title">
  <div class="container">
    <div class="home-use__head">
      <div class="home-use__title" data-aos="fade-right">
        <span class="eyebrow">Why homeowners use it</span>
        <h2 id="home-use-title">Focused on clear, safe siding comparison.</h2>
      </div>
      <p data-aos="fade-left">
        Exterra is built for real-life siding decisions: aging panels, exterior updates, damaged sections, material choices, replacement planning, and provider comparison.
      </p>
    </div>

    <div class="home-use__grid">
      ${[
        ["No direct service claims", "Exterra does not claim to be the contractor, installer, repair company, inspector, or material provider. We help connect homeowners with independent providers."],
        ["Better request quality", "A clear intake gives local providers enough context to decide whether they may be able to help and what details they need next."],
        ["Full siding categories", "Installation, replacement, repair, vinyl, fiber cement, wood-look, composite, trim, and exterior planning paths are covered."],
        ["Responsibility stays clear", "Homeowners should verify credentials, insurance, written estimates, warranties, references, and local requirements before work is performed."]
      ]
        .map(
          ([title, text], index) => `
            <article class="home-use__item" data-aos="fade-up" data-aos-delay="${index * 70}">
              <span class="home-use__number">${String(index + 1).padStart(2, "0")}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="home-editorial section-pad" aria-labelledby="home-editorial-title">
  <div class="container home-editorial__grid">
    <div class="home-editorial__copy" data-aos="fade-right">
      <span class="eyebrow">Welcome to Exterra</span>
      <h2 id="home-editorial-title">A clearer way to compare siding provider options.</h2>

      <p class="home-editorial__lead">
        Exterra helps homeowners organize siding project details, understand available service paths, and compare local provider options before deciding what comes next.
      </p>

      <p>
        We do not perform siding work directly and we do not present ourselves as a contractor, installer, repair company, inspector, or material supplier. The platform is designed to make the request process clearer, so participating providers can better understand project type, timing, material direction, and location before follow-up.
      </p>

      <div class="home-editorial__meta">
        <div class="home-editorial__mark">
          ${E.icon("shield-check")}
        </div>
        <div>
          <strong>Independent matching platform</strong>
          <span>Provider availability, pricing, scheduling, warranties, licensing, insurance, and final service terms remain with each participating provider.</span>
        </div>
      </div>
    </div>

    <div class="home-editorial__media" data-aos="fade-left">
  <figure class="image-frame home-editorial__photo home-editorial__photo--single">
    <img src="assets/images/card-1.jpg" alt="Modern home exterior with siding" loading="lazy">
  </figure>
</div>
  </div>
</section>

      <section class="home-slider section-pad" aria-labelledby="popular-title">
        <div class="container">
          <div class="home-slider__top">
            <div class="section-heading">
              <span class="eyebrow">Popular paths</span>
              <h2 id="popular-title">Popular Siding Service Options</h2>
            </div>
            <div class="home-slider__controls" aria-label="Service slider controls">
              <button class="icon-button home-services-prev" type="button" aria-label="Previous service">${E.icon("arrow-left")}</button>
              <button class="icon-button home-services-next" type="button" aria-label="Next service">${E.icon("arrow-right")}</button>
            </div>
          </div>
          <div class="swiper home-services-swiper">
            <div class="swiper-wrapper">${serviceSlides()}</div>
          </div>
        </div>
      </section>

      <section class="home-process section-pad" aria-labelledby="process-title">
        <div class="container">
          <div class="section-heading">
            
            <span class="eyebrow">Matching flow</span>
            <h2 id="process-title">A Clearer Path From Request To Review</h2>
            <p>Exterra keeps the process focused on comparison and clarity while providers handle their own estimates, scheduling, and service terms.</p>
          </div>
          <div class="home-process__line">
            ${[
              ["Share Project Details", "Describe your siding goals, material interests, location, and timing.", "clipboard-edit"],
              ["Review Provider Options", "See available local siding provider paths where matching is available.", "search-check"],
              ["Compare Fit & Scope", "Look at service focus, estimate detail, communication, and next-step fit.", "sliders-horizontal"],
              ["Choose Your Next Step", "Continue with a provider only if the details feel right for your home.", "arrow-up-right"]
            ]
              .map(
                ([title, text, icon], index) => `
                  <article class="home-process__step" data-aos="fade-up" data-aos-delay="${index * 80}">
                    ${E.icon(icon)}
                    <h3>${title}</h3>
                    <p>${text}</p>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="home-marquee" aria-label="Siding material directions">
        <div class="home-marquee__track">
          ${["Vinyl", "Fiber Cement", "Composite", "Wood Look", "Exterior Trim", "Weather Barrier", "Panel Style", "Color Direction", "Vinyl", "Fiber Cement", "Composite", "Wood Look", "Exterior Trim", "Weather Barrier", "Panel Style", "Color Direction"]
            .map((item) => `<span class="home-marquee__item">${E.icon("minus")} ${item}</span>`)
            .join("")}
        </div>
      </section>

      <section class="home-tabs section-pad" aria-labelledby="tabs-title">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Provider fit</span>
            <h2 id="tabs-title">Compare The Details That Shape Fit</h2>
          </div>
          <div class="home-tabs__grid">
            <div class="home-tabs__list" role="tablist" aria-label="Provider fit factors">
              ${tabData
                .map(
                  (tab, index) => `
                    <button class="home-tabs__button${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-home-tab="${index}">
                      ${E.icon(tab.icon)}<span>${tab.title}</span>
                    </button>`
                )
                .join("")}
            </div>
            <article class="home-tabs__panel" data-home-tab-panel>
              <div class="home-tabs__panel-copy">
                <h3>${tabData[0].title}</h3>
                <p>${tabData[0].text}</p>
              </div>
              <img src="${tabData[0].image}" alt="${tabData[0].title} siding comparison visual" loading="lazy">
            </article>
          </div>
        </div>
      </section>

      <section class="home-parallax section-pad" aria-labelledby="parallax-title">
        <div class="container home-parallax__inner" data-aos="fade-up">
          <h2 id="parallax-title">Ready To Compare Siding Options?</h2>
          <p>Submit your siding project details and review available local provider options before deciding how to move forward.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="contact.html"><span>Start Your Request</span>${E.icon("arrow-up-right")}</a>
            <a class="btn btn-ghost" href="all-services.html"><span>View Service Paths</span>${E.icon("arrow-up-right")}</a>
          </div>
        </div>
      </section>

      <section class="home-faq section-pad" aria-labelledby="home-faq-title">
        <div class="container home-faq__grid">
          <figure class="image-frame home-faq__round" data-aos="zoom-in"><img src="assets/images/siding-detail-3.jpg" alt="Round-cropped siding detail" loading="lazy"></figure>
          <div>
            <div class="section-heading">
              <span class="eyebrow">Questions</span>
              <h2 id="home-faq-title">Siding Matching FAQs</h2>
            </div>
            ${E.faqMarkup(faqs)}
          </div>
        </div>
      </section>

      <section class="home-transparency" aria-labelledby="transparency-title">
        <div class="container home-transparency__grid">
          <div class="home-transparency__dark" data-aos="fade-right">
            <span class="eyebrow">Transparency</span>
            <h2 id="transparency-title">Clear About What Exterra Is</h2>
            <p>Exterra helps with provider matching and comparison. Participating providers independently provide final pricing, scheduling, warranties, licensing, insurance, and service terms.</p>
          </div>
          <div class="home-transparency__light" data-aos="fade-left">
            <div class="home-transparency__list">
              ${[
                ["No direct siding work by Exterra", "We are not the company performing siding work."],
                ["Independent providers", "Local provider options are independent businesses."],
                ["Homeowner verification matters", "Verify final provider details before moving forward."],
                ["Availability varies by location", "Matching depends on service area and participating provider availability."]
              ]
                .map(
                  ([title, text]) => `
                    <article class="home-transparency__item">
                      ${E.icon("check-circle-2")}
                      <div><h3>${title}</h3><p>${text}</p></div>
                    </article>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      ${E.renderGlobalCta({
        id: "home-cta",
        title: "Start With A Clearer Siding Request",
        text: "Submit your project details and review available local options before deciding how to move forward.",
        buttons: [
          { label: "Submit Project Details", href: "contact.html", variant: "btn-primary" },
          { label: "Compare Services", href: "all-services.html", variant: "btn-ghost" }
        ]
      })}
    `;

    E.addFaqSchema(faqs);
    bindHomeTabs();
    initHomeSwiper();
    E.pageReady();
  }

  function bindHomeTabs() {
    const buttons = document.querySelectorAll("[data-home-tab]");
    const panel = document.querySelector("[data-home-tab-panel]");
    if (!buttons.length || !panel) return;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.homeTab);
        const tab = tabData[index];
        buttons.forEach((item) => {
          item.classList.toggle("is-active", item === button);
          item.setAttribute("aria-selected", String(item === button));
        });
        panel.innerHTML = `
          <div class="home-tabs__panel-copy">
            <h3>${E.escapeHtml(tab.title)}</h3>
            <p>${E.escapeHtml(tab.text)}</p>
          </div>
          <img src="${tab.image}" alt="${E.escapeHtml(tab.title)} siding comparison visual" loading="lazy">`;
        E.pageReady();
      });
    });
  }

  function initHomeSwiper() {
    if (!window.Swiper) return;
    new window.Swiper(".home-services-swiper", {
      slidesPerView: 1.1,
      spaceBetween: 18,
      navigation: {
        nextEl: ".home-services-next",
        prevEl: ".home-services-prev"
      },
      breakpoints: {
        700: { slidesPerView: 2.1 },
        1040: { slidesPerView: 3 }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
