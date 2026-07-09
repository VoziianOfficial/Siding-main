(function () {
  const CFG = window.EXTERRA_CONFIG || {};
  const services = CFG.services || [];
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const cookieKey = "exterra_cookie_consent";

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function icon(name) {
    return `<i data-lucide="${escapeHtml(name)}" aria-hidden="true"></i>`;
  }

  function serviceByUrl(url) {
    return services.find((service) => service.url === url);
  }

  function serviceOptions() {
    return services
      .map((service) => `<option value="${escapeHtml(service.name)}">${escapeHtml(service.name)}</option>`)
      .join("");
  }

  function isServicesPage() {
    return currentPage === "all-services.html" || services.some((service) => service.url === currentPage);
  }

  function navClass(page) {
    if (page === "services") {
      return isServicesPage() ? " is-active" : "";
    }
    return currentPage === page ? " is-active" : "";
  }

  function dropdownLinks() {
    return services
      .map(
        (service) => `
          <a class="dropdown-service" href="${service.url}">
            ${icon(service.icon || "panel-top")}
            <span>${escapeHtml(service.name)}<small>${escapeHtml(service.short)}</small></span>
          </a>`
      )
      .join("");
  }

  function buildHeader() {
    const target = document.querySelector("[data-site-header]");
    if (!target) return;

    target.classList.add("site-header");

    target.innerHTML = `
      <div class="container header-inner">
        <a class="brand-link" href="index.html" aria-label="${escapeHtml(CFG.brand.name)} home">
          <img src="assets/images/logo.svg" alt="${escapeHtml(CFG.brand.name)}">
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          <a class="nav-link${navClass("index.html")}" href="index.html">Home</a>
          <a class="nav-link${navClass("about.html")}" href="about.html">About</a>
          <div class="nav-dropdown">
            <div class="nav-dropdown__trigger">
              <a class="nav-link nav-dropdown__link${navClass("services")}" href="all-services.html">Services</a>
              <button class="nav-dropdown__button" type="button" aria-expanded="false" aria-label="Toggle services menu" data-dropdown-toggle>
                ${icon("chevron-down")}
              </button>
            </div>
            <div class="nav-dropdown__menu" data-services-dropdown>
              <a class="dropdown-service dropdown-service--all" href="all-services.html">
                ${icon("layout-grid")}
                <span>All Services<small>Browse every siding service page in one place.</small></span>
              </a>
              ${dropdownLinks()}
            </div>
          </div>
          <a class="nav-link${navClass("contact.html")}" href="contact.html">Contact</a>
        </nav>
        <div class="header-actions">
          <button class="icon-button" type="button" aria-label="Open search" data-search-open>${icon("search")}</button>
          <a class="btn btn-primary" href="contact.html"><span>${escapeHtml(CFG.contact.phoneButtonText)}</span>${icon("arrow-up-right")}</a>
          <button class="icon-button mobile-toggle" type="button" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false" data-mobile-open>${icon("menu")}</button>
        </div>
      </div>`;
  }

  function buildMobileMenu() {
    if (document.querySelector("[data-mobile-menu]")) return;
    const menu = document.createElement("aside");
    menu.className = "mobile-menu";
    menu.id = "mobile-menu";
    menu.setAttribute("data-mobile-menu", "");
    menu.setAttribute("aria-hidden", "true");
    menu.innerHTML = `
      <div class="mobile-menu__bar">
        <a class="brand-link mobile-menu__brand" href="index.html" aria-label="${escapeHtml(CFG.brand.name)} home">
          <img src="assets/images/logo.svg" alt="${escapeHtml(CFG.brand.name)}">
        </a>
        <button class="icon-button" type="button" aria-label="Close menu" data-mobile-close>${icon("x")}</button>
      </div>
      <div class="mobile-menu__content">
        <nav class="mobile-menu__nav" aria-label="Mobile navigation">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="all-services.html">All Services</a>
          <a href="contact.html">Contact</a>
        </nav>
        <div class="mobile-menu__services" aria-label="Siding services">
          ${services
            .map((service) => `<a href="${service.url}">${icon(service.icon || "panel-top")}<span>${escapeHtml(service.name)}</span></a>`)
            .join("")}
        </div>
        <div class="mobile-menu__contact">
          <a href="${CFG.contact.phoneHref}">${escapeHtml(CFG.contact.phoneDisplay)}</a>
          <a href="${CFG.contact.emailHref}">${escapeHtml(CFG.contact.email)}</a>
          <span>${escapeHtml(CFG.company.serviceArea)}</span>
        </div>
      </div>`;
    document.body.appendChild(menu);
  }

  function openMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const toggle = document.querySelector("[data-mobile-open]");
    if (!menu) return;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    const close = menu.querySelector("[data-mobile-close]");
    if (close) close.focus();
  }

  function closeMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const toggle = document.querySelector("[data-mobile-open]");
    if (!menu) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function buildSearchOverlay() {
    if (document.querySelector("[data-search-overlay]")) return;
    const overlay = document.createElement("section");
    overlay.className = "search-overlay";
    overlay.setAttribute("data-search-overlay", "");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <button class="icon-button search-close" type="button" aria-label="Close search" data-search-close>${icon("x")}</button>
        <h2 id="search-title">Search Siding Options</h2>
        <p>Find service pages by project type, material direction, or siding concern.</p>
        <form class="search-form" data-overlay-search>
          <label class="visually-hidden" for="site-search-input">Search services</label>
          <input id="site-search-input" type="search" placeholder="Search installation, repair, vinyl..." autocomplete="off">
          <button class="btn btn-primary" type="submit"><span>Search</span>${icon("search")}</button>
        </form>
        <div class="search-results" data-search-results aria-live="polite"></div>
      </div>`;
    document.body.appendChild(overlay);
  }

  function matchServices(query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return services;
    const aliases = {
      install: "Siding Installation",
      installation: "Siding Installation",
      new: "Siding Installation",
      replace: "Siding Replacement",
      replacement: "Siding Replacement",
      old: "Siding Replacement",
      repair: "Siding Repair",
      damage: "Siding Repair",
      crack: "Siding Repair",
      vinyl: "Vinyl Siding",
      cement: "Fiber Cement Siding",
      fiber: "Fiber Cement Siding",
      composite: "Wood & Composite Siding",
      wood: "Wood & Composite Siding"
    };
    const aliasHit = Object.keys(aliases).find((key) => q.includes(key));
    if (aliasHit) return services.filter((service) => service.name === aliases[aliasHit]);
    return services.filter((service) => `${service.name} ${service.short}`.toLowerCase().includes(q));
  }

  function renderSearchResults(query) {
    const target = document.querySelector("[data-search-results]");
    if (!target) return;
    const matches = matchServices(query);
    if (!matches.length) {
      target.innerHTML = `<p>Try siding installation, replacement, repair, vinyl, fiber cement, or wood composite.</p>`;
      return;
    }
    target.innerHTML = matches
      .map((service) => `<a href="${service.url}">${escapeHtml(service.name)}<br><small>${escapeHtml(service.short)}</small></a>`)
      .join("");
  }

  function openSearch(seed) {
    const overlay = document.querySelector("[data-search-overlay]");
    const input = document.querySelector("#site-search-input");
    if (!overlay || !input) return;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    input.value = seed || "";
    renderSearchResults(input.value);
    window.setTimeout(() => input.focus(), 30);
  }

  function closeSearch() {
    const overlay = document.querySelector("[data-search-overlay]");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  }

  function buildFooter() {
    const target = document.querySelector("[data-site-footer]");
    if (!target) return;

    target.innerHTML = `
      <div class="container footer-inner">
        <div class="footer-brand">
          <a class="brand-link" href="index.html" aria-label="${escapeHtml(CFG.brand.name)} home">
            <img src="assets/images/logo.svg" alt="${escapeHtml(CFG.brand.name)}">
          </a>
          <p>${escapeHtml(CFG.footer.description)}</p>
          <p class="mini-disclaimer">${escapeHtml(CFG.legal.shortDisclaimer)}</p>
        </div>
        <div>
          <h2 class="footer-title">Navigation</h2>
          <nav class="footer-links" aria-label="Footer navigation">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="all-services.html">All Services</a>
            <a href="contact.html">Contact</a>
          </nav>
        </div>
        <div>
          <h2 class="footer-title">Services</h2>
          <nav class="footer-links" aria-label="Footer service links">
            ${services.map((service) => `<a href="${service.url}">${escapeHtml(service.name)}</a>`).join("")}
          </nav>
        </div>
        <div>
          <h2 class="footer-title">Company</h2>
          <div class="footer-links">
            <span>${escapeHtml(CFG.company.legalName)}</span>
            <span>${escapeHtml(CFG.company.companyId)}</span>
            <a href="${escapeHtml(CFG.company.mapHref)}" target="_blank" rel="noopener">${escapeHtml(CFG.company.address)}<br>${escapeHtml(CFG.company.cityStateZip)}</a>
            <span>${escapeHtml(CFG.company.country)}</span>
            <span>${escapeHtml(CFG.company.serviceArea)}</span>
            <a href="${CFG.contact.phoneHref}">${escapeHtml(CFG.contact.phoneDisplay)}</a>
            <a href="${CFG.contact.emailHref}">${escapeHtml(CFG.contact.email)}</a>
          </div>
        </div>
      </div>
      <div class="container footer-disclaimer">${escapeHtml(CFG.legal.fullDisclaimer)}</div>
      <div class="container footer-bottom">
        <span>${escapeHtml(CFG.footer.copyright)}</span>
        <nav class="footer-links" aria-label="Legal links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-of-service.html">Terms of Service</a>
          <a href="cookie-policy.html">Cookie Policy</a>
        </nav>
      </div>`;
  }

  function buildCookieBanner() {
    if (document.querySelector("[data-cookie-banner]")) return;
    const banner = document.createElement("aside");
    banner.className = "cookie-banner";
    banner.setAttribute("data-cookie-banner", "");
    banner.innerHTML = `
      <p>Exterra uses essential site storage and optional preference cookies to improve this matching-platform website. Review our <a href="privacy-policy.html">Privacy Policy</a>, <a href="terms-of-service.html">Terms</a>, and <a href="cookie-policy.html">Cookie Policy</a>.</p>
      <div class="cookie-actions">
        <button class="btn btn-light" type="button" data-cookie-decline><span>Decline</span></button>
        <button class="btn btn-primary" type="button" data-cookie-accept><span>Accept</span></button>
      </div>`;
    document.body.appendChild(banner);
    if (!localStorage.getItem(cookieKey)) {
      banner.classList.add("is-visible");
    }
  }

  function bindHeader() {
    const header = document.querySelector("[data-site-header]");
    const dropdown = document.querySelector(".nav-dropdown");
    const dropdownToggle = document.querySelector("[data-dropdown-toggle]");

    if (dropdown && dropdownToggle && !dropdownToggle.dataset.bound) {
      dropdownToggle.dataset.bound = "true";
      dropdownToggle.addEventListener("click", () => {
        const expanded = dropdownToggle.getAttribute("aria-expanded") === "true";
        const nextExpanded = String(!expanded);
        dropdownToggle.setAttribute("aria-expanded", nextExpanded);
        dropdown.classList.toggle("is-open", !expanded);
      });
      document.addEventListener("click", (event) => {
        if (!event.target.closest(".nav-dropdown")) {
          dropdownToggle.setAttribute("aria-expanded", "false");
          dropdown.classList.remove("is-open");
        }
      });
    }

    if (header && !header.dataset.stickyBound) {
      header.dataset.stickyBound = "true";
      const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 12);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  function bindGlobalEvents() {
    document.addEventListener("click", (event) => {
      const mobileOpen = event.target.closest("[data-mobile-open]");
      const mobileClose = event.target.closest("[data-mobile-close]");
      const mobileLink = event.target.closest("[data-mobile-menu] a");
      const searchOpen = event.target.closest("[data-search-open]");
      const searchClose = event.target.closest("[data-search-close]");
      const accept = event.target.closest("[data-cookie-accept]");
      const decline = event.target.closest("[data-cookie-decline]");

      if (mobileOpen) openMobileMenu();
      if (mobileClose || mobileLink) closeMobileMenu();
      if (searchOpen) openSearch("");
      if (searchClose) closeSearch();
      if (accept || decline) {
        localStorage.setItem(cookieKey, accept ? "accepted" : "declined");
        const banner = document.querySelector("[data-cookie-banner]");
        if (banner) banner.classList.remove("is-visible");
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.matches("#site-search-input")) {
        renderSearchResults(event.target.value);
      }
    });

    document.addEventListener("submit", (event) => {
      const overlayForm = event.target.closest("[data-overlay-search]");
      const siteSearch = event.target.closest("[data-site-search]");
      if (overlayForm) {
        event.preventDefault();
        const input = overlayForm.querySelector("input");
        const matches = matchServices(input ? input.value : "");
        if (matches.length) window.location.href = matches[0].url;
      }
      if (siteSearch) {
        event.preventDefault();
        const input = siteSearch.querySelector("input");
        const matches = matchServices(input ? input.value : "");
        if (matches.length) {
          window.location.href = matches[0].url;
        } else {
          openSearch(input ? input.value : "");
        }
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        closeSearch();
      }
    });
  }

  function injectConfigData() {
    document.querySelectorAll("[data-config]").forEach((node) => {
      const path = node.dataset.config.split(".");
      const value = path.reduce((object, key) => (object ? object[key] : undefined), CFG);
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-config-href]").forEach((node) => {
      const path = node.dataset.configHref.split(".");
      const value = path.reduce((object, key) => (object ? object[key] : undefined), CFG);
      if (typeof value === "string") node.setAttribute("href", value);
    });
  }

  function bindAccordions() {
    document.querySelectorAll("[data-accordion]").forEach((accordion) => {
      if (accordion.dataset.bound) return;
      accordion.dataset.bound = "true";
      accordion.addEventListener("click", (event) => {
        const trigger = event.target.closest(".accordion-trigger");
        if (!trigger) return;
        const item = trigger.closest(".accordion-item");
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        if (!item) return;
        item.classList.toggle("is-open", !expanded);
        trigger.setAttribute("aria-expanded", String(!expanded));
      });
    });
  }

  function initLibraries() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    if (window.AOS && typeof window.AOS.init === "function") {
      if (!window.__EXTERRA_AOS_INITED__) {
        document.documentElement.classList.add("aos-enabled");
        window.AOS.init({
          duration: 750,
          easing: "ease-out-cubic",
          once: true,
          offset: 80
        });
        window.__EXTERRA_AOS_INITED__ = true;
      } else if (typeof window.AOS.refreshHard === "function") {
        window.AOS.refreshHard();
      }
    }
  }

  function initDynamicUi() {
    injectConfigData();
    bindAccordions();
    initLibraries();
  }

  function renderHero(options) {
    const quickTags = options.tags || [];
    const titleMarkup = Array.isArray(options.titleLines)
      ? options.titleLines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")
      : escapeHtml(options.title);
    return `
      <section class="page-hero ${options.className || ""}" style="background-image: url('${escapeHtml(options.image)}')" aria-labelledby="${escapeHtml(options.id)}-title">
        <div class="page-hero__inner">
          <div class="page-hero__copy" data-aos="fade-up">
            <span class="page-hero__outline" aria-hidden="true">${escapeHtml(options.outline)}</span>
            <span class="eyebrow page-hero__label">${escapeHtml(options.label || CFG.brand.tagline)}</span>
            <h1 class="page-hero__title" id="${escapeHtml(options.id)}-title">${titleMarkup}</h1>
            <p class="page-hero__text">${escapeHtml(options.text)}</p>
            <div class="hero-actions">
              ${(options.buttons || [])
                .map((button, index) => `<a class="btn ${button.variant || (index ? "btn-ghost" : "btn-primary")}" href="${button.href}"><span>${escapeHtml(button.label)}</span>${icon(button.icon || "arrow-up-right")}</a>`)
                .join("")}
            </div>
          </div>
          ${
            options.search
              ? `<form class="hero-search" data-site-search data-aos="fade-up" data-aos-delay="150">
                  <label class="visually-hidden" for="${escapeHtml(options.id)}-search">Search siding services</label>
                  <input id="${escapeHtml(options.id)}-search" type="search" placeholder="${escapeHtml(options.search.placeholder)}">
                  <button class="btn btn-primary" type="submit"><span>${escapeHtml(options.search.button)}</span>${icon("search")}</button>
                </form>
                <div class="hero-tags" data-aos="fade-up" data-aos-delay="220">
                  ${quickTags.map((tag) => `<a href="${escapeHtml(tag.href)}">${escapeHtml(tag.label)}</a>`).join("")}
                </div>`
              : ""
          }
        </div>
      </section>`;
  }

  function renderGlobalCta(options) {
    return `
      <section class="global-cta" aria-labelledby="${escapeHtml(options.id)}-title">
        <div class="container">
          <div class="global-cta__card" style="background-image: url('${escapeHtml(options.image || "assets/images/cta-bg.jpg")}')" data-aos="zoom-in">
            <div class="global-cta__content">
              <span class="eyebrow">${escapeHtml(options.label || "Clearer next step")}</span>
              <h2 id="${escapeHtml(options.id)}-title">${escapeHtml(options.title)}</h2>
              <p>${escapeHtml(options.text)}</p>
            </div>
            <div class="cta-actions">
              ${(options.buttons || [
                { label: "Start Your Request", href: "contact.html", variant: "btn-primary" },
                { label: "View Services", href: "all-services.html", variant: "btn-ghost" }
              ])
                .map((button) => `<a class="btn ${button.variant || "btn-primary"}" href="${button.href}"><span>${escapeHtml(button.label)}</span>${icon(button.icon || "arrow-up-right")}</a>`)
                .join("")}
            </div>
          </div>
        </div>
      </section>`;
  }

  function faqMarkup(faqs) {
    return `
      <div class="accordion-list" data-accordion>
        ${faqs
          .map(
            (faq, index) => `
              <div class="accordion-item${index === 0 ? " is-open" : ""}">
                <button class="accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                  <span>${escapeHtml(faq.question)}</span>${icon("plus")}
                </button>
                <div class="accordion-panel"><p>${escapeHtml(faq.answer)}</p></div>
              </div>`
          )
          .join("")}
      </div>`;
  }

  function addFaqSchema(faqs) {
    if (!Array.isArray(faqs) || !faqs.length) return;
    const existing = document.querySelector("script[data-faq-schema]");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-schema", "");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    });
    document.head.appendChild(script);
  }

  function pageReady() {
    initDynamicUi();
    document.dispatchEvent(new CustomEvent("exterra:page-ready"));
  }

  window.Exterra = {
    CFG,
    services,
    escapeHtml,
    icon,
    serviceByUrl,
    serviceOptions,
    renderHero,
    renderGlobalCta,
    faqMarkup,
    addFaqSchema,
    matchServices,
    pageReady,
    initDynamicUi
  };

  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildMobileMenu();
    buildSearchOverlay();
    buildFooter();
    buildCookieBanner();
    bindHeader();
    bindGlobalEvents();
    initDynamicUi();
  });
})();
