(function () {
  const E = window.Exterra;
  if (!E) return;

  const sharedFactors = [
    { question: "Material or product direction", answer: "Compare the siding type, trim details, finish expectations, and any product assumptions described by the provider." },
    { question: "Existing siding condition", answer: "Share visible condition notes so provider conversations can address replacement depth, localized concerns, access, or prep needs." },
    { question: "Estimate detail", answer: "Review what is included, what is excluded, and which conditions could change the final provider estimate." },
    { question: "Timeline", answer: "Ask providers to confirm availability, scheduling windows, and any timing requirements tied to the project." },
    { question: "Licensing and insurance verification", answer: "Homeowners should verify licensing, insurance, warranties, references, and final terms directly with any provider." }
  ];

  const pages = {
    "siding-installation": {
      title: "Siding Installation",
      outline: "Install",
      image: "assets/images/siding-installation.jpg",
      photoA: "assets/images/exterior-home-1.jpg",
      photoB: "assets/images/siding-detail-1.jpg",
      photoC: "assets/images/card-1.jpg",
      splitImage: "assets/images/card-8.jpg",
      overviewImage: "assets/images/card-9.jpg",
      circleImage: "assets/images/card-10.jpg",
      variant: "round",
      overview: "For new siding projects, homeowners often compare provider experience, material direction, trim detail, weather-barrier assumptions, and how clearly the next steps are explained.",
      searches: [
        ["New exterior plans", "Homeowners planning a fresh exterior direction or broader curb-appeal update.", "house-plus"],
        ["Material decisions", "Requests that need vinyl, fiber cement, composite, or wood-look comparison.", "layers"],
        ["Scope clarity", "Projects where trim, corners, windows, and access details should be discussed.", "clipboard-list"]
      ],
      faqs: [
        ["Does Exterra install siding?", "No. Exterra is an independent provider-matching platform and does not perform siding installation."],
        ["What should I include for a new siding request?", "Include material interests, home exterior notes, timing, location, and any trim or color direction."],
        ["Who confirms installation pricing?", "Participating providers independently provide final pricing, scheduling, warranties, licensing, insurance, and terms."],
        ["Can I compare materials before choosing?", "Yes. Your request can include vinyl, fiber cement, composite, wood-look, trim, or color preferences."]
      ]
    },
    "siding-replacement": {
      title: "Siding Replacement",
      outline: "Replace",
      image: "assets/images/siding-replacement.jpg",
      photoA: "assets/images/siding-detail-2.jpg",
      photoB: "assets/images/exterior-home-2.jpg",
      photoC: "assets/images/card-2.jpg",
      splitImage: "assets/images/card-11.jpg",
      overviewImage: "assets/images/card-6.jpg",
      circleImage: "assets/images/card-7.jpg",
      variant: "overlap",
      overview: "Replacement requests usually involve worn, outdated, damaged, or inefficient siding. A clear request helps compare provider approaches to removal, material direction, trim, and exterior condition.",
      searches: [
        ["Aging siding", "Panels that look faded, warped, cracked, or past their practical life.", "history"],
        ["Exterior refresh", "Homeowners comparing new material direction for a more current facade.", "refresh-cw"],
        ["Broader scope", "Projects that may include trim, corners, soffit, fascia, or window transitions.", "panel-top"]
      ],
      faqs: [
        ["Does Exterra replace siding?", "No. Exterra does not perform siding replacement. Providers independently handle any work they agree to perform."],
        ["What affects replacement scope?", "Material, existing siding condition, home size, access, trim, disposal, and provider-specific assumptions can affect scope."],
        ["Can I compare more than one replacement provider?", "Where availability allows, homeowners may review more than one local provider option."],
        ["Who provides warranty details?", "Warranty details are provided by participating providers and should be confirmed directly."]
      ]
    },
    "siding-repair": {
      title: "Siding Repair",
      outline: "Repair",
      image: "assets/images/siding-repair.jpg",
      photoA: "assets/images/siding-detail-3.jpg",
      photoB: "assets/images/siding-texture-1.jpg",
      photoC: "assets/images/card-3.jpg",
      splitImage: "assets/images/card-4.jpg",
      overviewImage: "assets/images/card-5.jpg",
      circleImage: "assets/images/hero-home.jpg",
      variant: "quadrant",
      overview: "Repair-focused requests may involve loose panels, cracks, gaps, impact damage, moisture concerns, or localized wear. Provider availability and suitability can vary by damage type and location.",
      searches: [
        ["Visible damage", "Cracks, gaps, loose panels, missing trim, or impact concerns.", "badge-alert"],
        ["Localized scope", "Requests that may need focused review rather than full replacement.", "scan-search"],
        ["Provider fit", "Repair work can depend heavily on material type and provider coverage.", "map-pin"]
      ],
      faqs: [
        ["Does Exterra repair siding?", "No. Exterra does not perform siding repair directly."],
        ["Can all siding damage be repaired?", "A provider must evaluate the material, condition, and scope to determine available options."],
        ["What details help a repair request?", "Describe the location, damage type, material if known, and whether moisture or loose panels are visible."],
        ["Who confirms final repair terms?", "Participating providers provide final pricing, scheduling, warranties, licensing, insurance, and service terms."]
      ]
    },
    "vinyl-siding": {
      title: "Vinyl Siding",
      outline: "Vinyl",
      image: "assets/images/vinyl-siding.jpg",
      photoA: "assets/images/siding-texture-2.jpg",
      photoB: "assets/images/exterior-home-2.jpg",
      photoC: "assets/images/card-6.jpg",
      splitImage: "assets/images/card-7.jpg",
      overviewImage: "assets/images/card-8.jpg",
      circleImage: "assets/images/card-9.jpg",
      variant: "tall",
      overview: "Vinyl siding requests often focus on practical maintenance, color direction, panel style, trim compatibility, and provider familiarity with local exterior conditions.",
      searches: [
        ["Low-maintenance direction", "Homeowners comparing practical siding options for exterior updates.", "layers"],
        ["Color and panel style", "Requests that include color, profile, trim, or visual direction.", "palette"],
        ["Replacement planning", "Vinyl may be compared for full replacement or selected exterior sections.", "replace"]
      ],
      faqs: [
        ["Does Exterra install vinyl siding?", "No. Exterra is a matching platform and does not perform vinyl siding work directly."],
        ["Can I request vinyl-specific provider options?", "Yes. Select Vinyl Siding on the request form and describe your project details."],
        ["What should I compare for vinyl siding?", "Compare panel profile, color, trim details, estimate clarity, timeline, and provider terms."],
        ["Are vinyl provider options available everywhere?", "Availability may vary by location and participating provider coverage."]
      ]
    },
    "fiber-cement-siding": {
      title: "Fiber Cement Siding",
      outline: "Cement",
      image: "assets/images/fiber-cement-siding.jpg",
      photoA: "assets/images/card-10.jpg",
      photoB: "assets/images/siding-detail-2.jpg",
      photoC: "assets/images/card-11.jpg",
      splitImage: "assets/images/card-1.jpg",
      overviewImage: "assets/images/card-2.jpg",
      circleImage: "assets/images/hero-about.jpg",
      variant: "overlap",
      overview: "Fiber cement siding requests may involve durability expectations, profile selection, trim coordination, installation assumptions, and provider familiarity with the material.",
      searches: [
        ["Durable exterior direction", "Homeowners comparing fiber cement for long-term exterior planning.", "shield-check"],
        ["Profile and trim", "Requests that include lap, panel, trim, corner, or color expectations.", "panel-top"],
        ["Detailed estimates", "Fiber cement comparisons benefit from clear scope, prep, and finish assumptions.", "file-search"]
      ],
      faqs: [
        ["Does Exterra provide fiber cement siding work?", "No. Exterra does not perform siding work directly."],
        ["What details matter for fiber cement requests?", "Material profile, trim, paint or finish assumptions, existing condition, and access notes can matter."],
        ["Who confirms product and warranty terms?", "Participating providers confirm product assumptions, warranties, pricing, scheduling, and service terms."],
        ["Can I compare fiber cement with other materials?", "Yes. Your request can mention other material directions you want to compare."]
      ]
    },
    "wood-composite-siding": {
      title: "Wood & Composite Siding",
      outline: "Wood",
      image: "assets/images/wood-composite-siding.jpg",
      photoA: "assets/images/exterior-home-1.jpg",
      photoB: "assets/images/siding-texture-1.jpg",
      photoC: "assets/images/card-4.jpg",
      splitImage: "assets/images/card-3.jpg",
      overviewImage: "assets/images/hero-contact.jpg",
      circleImage: "assets/images/card-5.jpg",
      variant: "quadrant",
      overview: "Wood-look, composite, and character-driven siding requests often involve texture, profile, maintenance expectations, trim details, and provider familiarity with the chosen direction.",
      searches: [
        ["Character-driven exteriors", "Homeowners comparing warmth, texture, profile, and visual identity.", "tree-pine"],
        ["Composite options", "Requests focused on wood-look or composite siding alternatives.", "layers-3"],
        ["Detail coordination", "Trim, corners, transitions, and finish details can shape provider comparison.", "scan-line"]
      ],
      faqs: [
        ["Does Exterra provide wood or composite siding work?", "No. Exterra is an independent matching platform and does not perform siding work directly."],
        ["What should I include for wood-look siding?", "Share material interests, texture or profile direction, existing condition, trim notes, and timing."],
        ["Can providers compare wood and composite options?", "Provider familiarity varies, so the request should identify the material directions you want to discuss."],
        ["Who provides final terms?", "Participating providers independently provide final pricing, scheduling, warranties, licensing, insurance, and service terms."]
      ]
    }
  };

  function currentSlug() {
    const fromBody = document.body.dataset.service;
    if (fromBody && pages[fromBody]) return fromBody;
    return (window.location.pathname.split("/").pop() || "").replace(".html", "");
  }

  function renderPhotoLayout(page) {
    const altA = `${page.title} siding detail`;
    const altB = `${page.title} exterior comparison`;
    if (page.variant === "round") {
      return `
        <div class="service-photo__layout service-photo__layout--round">
          <figure class="image-frame service-photo__image"><img src="${page.photoA}" alt="${E.escapeHtml(altA)}" loading="lazy"></figure>
          <figure class="image-frame service-photo__image"><img src="${page.photoB}" alt="${E.escapeHtml(altB)}" loading="lazy"></figure>
        </div>`;
    }
    if (page.variant === "overlap") {
      return `
        <div class="service-photo__layout service-photo__layout--overlap">
          <figure class="image-frame service-photo__image"><img src="${page.photoA}" alt="${E.escapeHtml(altA)}" loading="lazy"></figure>
          <figure class="image-frame service-photo__image"><img src="${page.photoB}" alt="${E.escapeHtml(altB)}" loading="lazy"></figure>
        </div>`;
    }
    if (page.variant === "tall") {
      return `
        <div class="service-photo__layout service-photo__layout--tall">
          <figure class="image-frame service-photo__image"><img src="${page.photoA}" alt="${E.escapeHtml(altA)}" loading="lazy"></figure>
          <figure class="image-frame service-photo__image"><img src="${page.photoB}" alt="${E.escapeHtml(altB)}" loading="lazy"></figure>
        </div>`;
    }
    return `
      <div class="service-photo__layout service-photo__layout--quadrant">
        <figure class="image-frame service-photo__image"><img src="${page.photoA}" alt="${E.escapeHtml(altA)}" loading="lazy"></figure>
        <div class="service-photo__stack">
          <figure class="image-frame service-photo__image"><img src="${page.photoB}" alt="${E.escapeHtml(altB)}" loading="lazy"></figure>
          <figure class="image-frame service-photo__image"><img src="${page.photoC}" alt="${E.escapeHtml(page.title)} siding material detail" loading="lazy"></figure>
        </div>
      </div>`;
  }

  function render() {
    const root = document.querySelector("[data-page-root]");
    const slug = currentSlug();
    const page = pages[slug] || pages["siding-installation"];
    const service = E.serviceByUrl(`${slug}.html`) || { name: page.title, image: page.image };
    const faqData = page.faqs.map(([question, answer]) => ({ question, answer }));

    if (!root) return;

    root.innerHTML = `
      ${E.renderHero({
        id: slug,
        image: page.image,
        outline: page.outline,
        title: page.title,
        text: `Compare local provider options for ${page.title.toLowerCase()} projects. Exterra is an independent siding provider-matching platform and does not perform siding work directly.`,
        buttons: [
          { label: "Start Request", href: "contact.html", variant: "btn-primary" },
          { label: "All Services", href: "all-services.html", variant: "btn-ghost" }
        ]
      })}

      <section class="service-hex-flow section-pad" aria-labelledby="service-hex-flow-title">
  <div class="container">
    <div class="service-hex-flow__head">
      <div data-aos="fade-right">
        <span class="eyebrow">Provider comparison flow</span>
        <h2 id="service-hex-flow-title">
          A clearer way to compare ${E.escapeHtml(service.name)} options
        </h2>
      </div>

      <p data-aos="fade-left">
        Exterra helps homeowners organize request details, review available local provider options, and decide whether to continue directly with a participating provider.
      </p>
    </div>

    <div class="service-hex-flow__steps">
      ${[
        ["Share Details", "Describe the project condition, timing, location, and material interests.", "clipboard-edit"],
        ["Check Availability", "Matching depends on location, service type, provider coverage, and timing.", "map-pin-check"],
        ["Compare Scope", "Review provider communication, estimate assumptions, materials, and next steps.", "list-checks"],
        ["Choose Next Step", "Continue only after confirming provider details, credentials, and final terms.", "arrow-up-right"]
      ]
        .map(
          ([title, text, icon], index) => `
            <article class="service-hex-flow__step" data-aos="fade-up" data-aos-delay="${index * 80}">
              <div class="service-hex-flow__hex">
                ${E.icon(icon)}
                <span>${index + 1}</span>
              </div>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>`
        )
        .join("")}
    </div>
  </div>
</section>

      <section class="service-split-note section-pad" aria-labelledby="service-split-note-title">
  <div class="service-split-note__grid">
    <figure class="service-split-note__media" data-aos="fade-right">
      <img src="${page.splitImage}" alt="${E.escapeHtml(service.name)} siding provider matching visual" loading="lazy">
    </figure>

    <div class="service-split-note__panel" data-aos="fade-left">
      <div class="service-split-note__icons" aria-hidden="true">
        ${E.icon(service.icon || "panel-top")}
        ${E.icon("clipboard-list")}
        ${E.icon("search-check")}
      </div>

      <h2 id="service-split-note-title">
        Compare local provider options for ${E.escapeHtml(service.name)}
      </h2>

      <p class="service-split-note__lead">
        Exterra helps homeowners organize project details, review available provider paths, and decide whether to continue with a local siding provider.
      </p>

      <p>
        Share the condition, material direction, timing, and location notes for your siding request. Participating providers independently handle their own pricing, scheduling, warranties, licensing, insurance, and final service terms.
      </p>

      <a class="service-split-note__link" href="contact.html">
        <span>Start Request</span>
        ${E.icon("plus")}
      </a>
    </div>
  </div>
</section>

      <section class="service-overview section-pad" aria-labelledby="overview-title">
        <div class="container service-overview__grid">
          <div data-aos="fade-right">
            <span class="service-overview__label">Provider matching for ${E.escapeHtml(page.title)}</span>
            <div class="section-heading">
              <span class="eyebrow">Service overview</span>
              <h2 id="overview-title">Compare The Details Before Moving Forward</h2>
              <p>${E.escapeHtml(page.overview)}</p>
              <p>${E.CFG.legal.shortDisclaimer}</p>
            </div>
          </div>
          <figure class="image-frame service-overview__photo" data-aos="fade-left">
            <img src="${page.overviewImage}" alt="${E.escapeHtml(page.title)} siding project visual" loading="lazy">
          </figure>
        </div>
      </section>

      <section class="service-searches section-pad" aria-labelledby="searches-title">
        <div class="container">
          <span class="eyebrow">Common request reasons</span>
          <h2 id="searches-title">When Homeowners Search For This Service</h2>
          <div class="service-searches__grid">
            ${page.searches
              .map(
                ([title, text, icon], index) => `
                  <article class="service-searches__item" data-aos="fade-up" data-aos-delay="${index * 80}">
                    ${E.icon(icon)}<h3>${title}</h3><p>${text}</p>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="service-factors section-pad" aria-labelledby="factor-title">
        <div class="container service-factors__grid">
          <div class="section-heading" data-aos="fade-right">
            <span class="eyebrow">Comparison factors</span>
            <h2 id="factor-title">Provider Details Worth Reviewing</h2>
            <p>Use these factors to compare provider options and ask clearer follow-up questions before deciding whether to continue.</p>
          </div>
          <div data-aos="fade-left">${E.faqMarkup(sharedFactors)}</div>
        </div>
      </section>

      <section class="service-matching section-pad" aria-labelledby="matching-title">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Matching process</span>
            <h2 id="matching-title">How Matching Works For This Service</h2>
          </div>
          <div class="service-matching__steps">
            ${[
              ["Share Details", "Submit service type, condition notes, location, and material interests."],
              ["Check Availability", "Available local provider options depend on market and project fit."],
              ["Review Options", "Compare provider focus, estimate clarity, timeline, and communication."],
              ["Confirm Directly", "Verify final pricing, licensing, insurance, warranties, and service terms with the provider."]
            ]
              .map(
                ([title, text], index) => `
                  <article class="service-matching__step" data-aos="fade-up" data-aos-delay="${index * 70}">
                    <h3>${title}</h3><p>${text}</p>
                  </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

     <section class="service-circle-intro section-pad" aria-labelledby="service-circle-intro-title">
  <div class="container service-circle-intro__grid">
    <div class="service-circle-intro__media" data-aos="fade-right">
      <span class="service-circle-intro__dots" aria-hidden="true"></span>

      <figure class="service-circle-intro__photo">
        <img src="${page.circleImage}" alt="${E.escapeHtml(service.name)} service overview" loading="lazy">
      </figure>

      <span class="service-circle-intro__badge" aria-hidden="true">
        ${E.icon(service.icon || "panel-top")}
      </span>
    </div>

    <div class="service-circle-intro__copy" data-aos="fade-left">
      <span class="eyebrow service-circle-intro__eyebrow">Service overview</span>

      <h2 id="service-circle-intro-title">
        Compare provider options for ${E.escapeHtml(service.name)}
      </h2>

      <p class="service-circle-intro__lead">
        Exterra helps homeowners organize siding requests and compare available local provider options with clearer project details.
      </p>

      <p>
        Use this service path to describe the condition, timing, material direction, and location notes for your project before deciding whether to continue with a participating provider.
      </p>

      <ul class="service-circle-intro__list">
        <li>${E.icon("check-circle-2")}<span>Share the project type and visible exterior concerns</span></li>
        <li>${E.icon("check-circle-2")}<span>Include material interests and timing if known</span></li>
        <li>${E.icon("check-circle-2")}<span>Review provider availability and scope assumptions</span></li>
      </ul>

      <a class="btn btn-primary" href="contact.html">
        <span>Start Your Request</span>
        ${E.icon("arrow-up-right")}
      </a>
    </div>
  </div>
</section>

<section class="service-trust-strip section-pad-sm" aria-label="Service comparison notes">
  <div class="container service-trust-strip__grid">
    ${[
        ["Material Direction", "Share siding type, color direction, trim details, and visible exterior conditions.", "layers"],
        ["Provider Verification", "Homeowners should confirm licensing, insurance, references, and written terms directly.", "shield-check"],
        ["Clear Estimate Review", "Compare scope assumptions, exclusions, timing, and next-step details before choosing.", "file-search"]
      ]
        .map(
          ([title, text, icon], index) => `
          <article class="service-trust-strip__item" data-aos="fade-up" data-aos-delay="${index * 70}">
            <span class="service-trust-strip__icon">${E.icon(icon)}</span>
            <div>
              <h2>${title}</h2>
              <p>${text}</p>
            </div>
          </article>`
        )
        .join("")}
  </div>
</section>

      ${E.renderGlobalCta({
        id: `${slug}-cta`,
        title: `Compare ${page.title} Provider Options`,
        text: "Submit your project details and review available local options before deciding how to move forward.",
        buttons: [
          { label: "Submit Project Details", href: "contact.html", variant: "btn-primary" },
          { label: "View All Services", href: "all-services.html", variant: "btn-ghost" }
        ]
      })}
    `;

    E.addFaqSchema(faqData);
    E.pageReady();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
