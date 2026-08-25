/**
 * ============================================================================
 * APEX CRAFT & LIVING - CORE INTERACTIVE ENGINE
 * Vanilla JavaScript (ES6+) - High Performance, iOS/Android Optimized
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* --------------------------------------------------------------------------
     1. STICKY HEADER & SCROLL STATE
     -------------------------------------------------------------------------- */
  const siteHeader = document.querySelector(".site-header");
  const backToTopBtn = document.querySelector(".back-to-top");

  const handleScrollEffects = () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > 35) {
      siteHeader?.classList.add("scrolled");
    } else {
      siteHeader?.classList.remove("scrolled");
    }

    if (backToTopBtn) {
      if (scrollPos > 450) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  };

  window.addEventListener("scroll", handleScrollEffects, { passive: true });
  handleScrollEffects();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER & ACCESSIBILITY (Android/iOS)
     -------------------------------------------------------------------------- */
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const drawerBackdrop = document.querySelector(".drawer-backdrop");
  const mobileDrawerClose = document.querySelector(".mobile-drawer-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const openMobileMenu = () => {
    mobileToggle?.classList.add("active");
    mobileDrawer?.classList.add("open");
    drawerBackdrop?.classList.add("active");
    document.body.classList.add("menu-open");
    mobileDrawer?.setAttribute("aria-hidden", "false");
    mobileToggle?.setAttribute("aria-expanded", "true");
  };

  const closeMobileMenu = () => {
    mobileToggle?.classList.remove("active");
    mobileDrawer?.classList.remove("open");
    drawerBackdrop?.classList.remove("active");
    document.body.classList.remove("menu-open");
    mobileDrawer?.setAttribute("aria-hidden", "true");
    mobileToggle?.setAttribute("aria-expanded", "false");
  };

  mobileToggle?.addEventListener("click", () => {
    const isOpen = mobileDrawer?.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileDrawerClose?.addEventListener("click", closeMobileMenu);
  drawerBackdrop?.addEventListener("click", closeMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (mobileDrawer?.classList.contains("open")) closeMobileMenu();
      if (pagesDropdownWrapper?.classList.contains("open")) togglePagesDropdown(false);
    }
  });

  /* --------------------------------------------------------------------------
     2b. PAGES DROPDOWN CONTROLLER (Hover, Tap & Dismiss)
     -------------------------------------------------------------------------- */
  const pagesDropdownWrapper = document.querySelector(".nav-dropdown-wrapper");
  const pagesDropdownBtn = document.getElementById("pagesDropdownBtn");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  const togglePagesDropdown = (forceState) => {
    if (!pagesDropdownWrapper) return;
    const isCurrentlyOpen = pagesDropdownWrapper.classList.contains("open");
    const shouldOpen = typeof forceState === "boolean" ? forceState : !isCurrentlyOpen;

    if (shouldOpen) {
      pagesDropdownWrapper.classList.add("open");
      pagesDropdownBtn?.setAttribute("aria-expanded", "true");
    } else {
      pagesDropdownWrapper.classList.remove("open");
      pagesDropdownBtn?.setAttribute("aria-expanded", "false");
    }
  };

  pagesDropdownBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePagesDropdown();
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      togglePagesDropdown(false);
    });
  });

  document.addEventListener("click", (e) => {
    if (pagesDropdownWrapper && !pagesDropdownWrapper.contains(e.target)) {
      togglePagesDropdown(false);
    }
  });

  /* --------------------------------------------------------------------------
     3. SMOOTH ANCHOR SCROLLING & SCROLL SPY
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = siteHeader ? siteHeader.offsetHeight + 8 : 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href*="#${sectionId}"]`).forEach((el) => {
          el.classList.add("active");
        });
      } else {
        document.querySelectorAll(`.nav-link[href*="#${sectionId}"]`).forEach((el) => {
          el.classList.remove("active");
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     4. INTERSECTION OBSERVER - SCROLL REVEALS
     -------------------------------------------------------------------------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    reveals.forEach((element) => revealObserver.observe(element));
  } else {
    reveals.forEach((el) => el.classList.add("active"));
  }

  /* --------------------------------------------------------------------------
     5. DYNAMIC METRICS COUNTER ANIMATION
     -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  let statsCounted = false;

  const animateCounters = () => {
    statNumbers.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeOut * target;

        if (isDecimal) {
          counter.textContent = currentVal.toFixed(1);
        } else {
          counter.textContent = Math.floor(currentVal).toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const statsSection = document.querySelector(".stats-banner");
  if (statsSection && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsCounted) {
          statsCounted = true;
          animateCounters();
        }
      },
      { threshold: 0.25 }
    );
    statsObserver.observe(statsSection);
  }

  /* --------------------------------------------------------------------------
     6. PORTFOLIO GALLERY CATEGORY FILTER
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterCategory = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (filterCategory === "all" || itemCategory === filterCategory) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 20);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. FULLSCREEN LIGHTBOX MODAL
     -------------------------------------------------------------------------- */
  const lightboxModal = document.querySelector(".lightbox-modal:not(.policy-modal)");
  const lightboxImg = document.querySelector(".lightbox-image");
  const lightboxTitle = document.querySelector(".lightbox-title");
  const lightboxDesc = document.querySelector(".lightbox-desc");
  const lightboxClose = document.querySelector(".lightbox-close:not(.policy-modal-close)");
  const lightboxPrev = document.querySelector(".lightbox-prev");
  const lightboxNext = document.querySelector(".lightbox-next");

  let currentGalleryIndex = 0;
  let visibleGalleryItems = [];

  const getActiveGalleryItems = () => {
    return Array.from(galleryItems).filter((item) => item.style.display !== "none");
  };

  const updateLightboxContent = (index) => {
    visibleGalleryItems = getActiveGalleryItems();
    if (index < 0) index = visibleGalleryItems.length - 1;
    if (index >= visibleGalleryItems.length) index = 0;
    currentGalleryIndex = index;

    const currentItem = visibleGalleryItems[currentGalleryIndex];
    if (!currentItem) return;

    const imgElem = currentItem.querySelector("img");
    const titleElem = currentItem.querySelector(".gallery-title");
    const locationElem = currentItem.querySelector(".gallery-location");

    if (lightboxImg && imgElem) {
      lightboxImg.src = imgElem.src;
      lightboxImg.alt = imgElem.alt || "Project showcase";
    }
    if (lightboxTitle && titleElem) {
      lightboxTitle.textContent = titleElem.textContent;
    }
    if (lightboxDesc && locationElem) {
      lightboxDesc.textContent = locationElem.textContent;
    }
  };

  const openLightbox = (index) => {
    updateLightboxContent(index);
    lightboxModal?.classList.add("open");
    document.body.classList.add("menu-open");
    lightboxModal?.setAttribute("aria-hidden", "false");
  };

  const closeLightbox = () => {
    lightboxModal?.classList.remove("open");
    document.body.classList.remove("menu-open");
    lightboxModal?.setAttribute("aria-hidden", "true");
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      visibleGalleryItems = getActiveGalleryItems();
      const index = visibleGalleryItems.indexOf(item);
      openLightbox(index !== -1 ? index : 0);
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", () => updateLightboxContent(currentGalleryIndex - 1));
  lightboxNext?.addEventListener("click", () => updateLightboxContent(currentGalleryIndex + 1));

  lightboxModal?.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  /* --------------------------------------------------------------------------
     8. TESTIMONIALS CAROUSEL (Touch Enabled for Android & iOS)
     -------------------------------------------------------------------------- */
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const prevTestimonialBtn = document.querySelector(".testimonial-prev");
  const nextTestimonialBtn = document.querySelector(".testimonial-next");
  const sliderDots = document.querySelectorAll(".slider-dot");

  if (testimonialTrack && testimonialSlides.length > 0) {
    let currentSlide = 0;
    const totalSlides = testimonialSlides.length;
    let autoSlideInterval;

    const goToSlide = (slideIndex) => {
      if (slideIndex < 0) slideIndex = totalSlides - 1;
      if (slideIndex >= totalSlides) slideIndex = 0;
      currentSlide = slideIndex;

      testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      sliderDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentSlide);
      });
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    nextTestimonialBtn?.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });

    prevTestimonialBtn?.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });

    sliderDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        goToSlide(idx);
        resetAutoPlay();
      });
    });

    // Touch Swipe Support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialTrack.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    testimonialTrack.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 40;
      if (touchEndX < touchStartX - threshold) {
        nextSlide();
        resetAutoPlay();
      }
      if (touchEndX > touchStartX + threshold) {
        prevSlide();
        resetAutoPlay();
      }
    }, { passive: true });

    const startAutoPlay = () => {
      autoSlideInterval = setInterval(nextSlide, 7000);
    };

    const pauseAutoPlay = () => {
      clearInterval(autoSlideInterval);
    };

    const resetAutoPlay = () => {
      pauseAutoPlay();
      startAutoPlay();
    };

    testimonialTrack.parentElement?.addEventListener("mouseenter", pauseAutoPlay);
    testimonialTrack.parentElement?.addEventListener("mouseleave", startAutoPlay);

    startAutoPlay();
  }

  /* --------------------------------------------------------------------------
     9. FAQ ACCORDION
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    questionBtn?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherQuestion = otherItem.querySelector(".faq-question");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherQuestion) otherQuestion.setAttribute("aria-expanded", "false");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
        if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
        if (answer) answer.style.maxHeight = null;
      }
    });
  });

  if (faqItems.length > 0) {
    const firstQuestion = faqItems[0].querySelector(".faq-question");
    const firstAnswer = faqItems[0].querySelector(".faq-answer");
    faqItems[0].classList.add("active");
    firstQuestion?.setAttribute("aria-expanded", "true");
    if (firstAnswer) firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
  }

  /* --------------------------------------------------------------------------
     10. ONE-CLICK COPY CONTACT CHANNELS & TOAST NOTIFICATION
     -------------------------------------------------------------------------- */
  const copyToast = document.getElementById("copyToast");
  const copyToastText = document.getElementById("copyToastText");
  let toastTimer;

  const showCopyToast = (text) => {
    if (!copyToast) return;
    if (copyToastText) copyToastText.textContent = text;
    copyToast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      copyToast.classList.remove("visible");
    }, 2800);
  };

  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback
          const textarea = document.createElement("textarea");
          textarea.value = textToCopy;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        showCopyToast(`Copied: "${textToCopy}"`);
      } catch (err) {
        showCopyToast(`Copied to clipboard!`);
      }
    });
  });

  /* --------------------------------------------------------------------------
     11. LEGAL & POLICY MODAL
     -------------------------------------------------------------------------- */
  const policyModal = document.getElementById("policyModal");
  const policyModalTitle = document.getElementById("policyModalTitle");
  const policyModalBody = document.getElementById("policyModalBody");
  const policyCloseBtns = document.querySelectorAll(".policy-modal-close");
  const legalBtns = document.querySelectorAll(".footer-legal-btn");

  const policyContent = {
    privacy: {
      title: "Privacy Policy (Demo Notice)",
      body: "<p>We respect client confidentiality and privacy. Any contact initiated via this demo showcase is treated as strictly private.</p><p>No personal cookies or telemetry tracking scripts are shared with third parties.</p>"
    },
    terms: {
      title: "Terms of Service (Demo Notice)",
      body: "<p>Apex Craft &amp; Living delivers high-end bespoke architectural and interior remodeling. All contract conditions, architectural blueprints, and milestone delivery dates are established in individual signed contracts.</p>"
    },
    guarantee: {
      title: "10-Year Structural Guarantee",
      body: "<p>All load-bearing structures, waterproofing installations, and architectural expansions executed by Apex Craft &amp; Living are backed by a comprehensive 10-year warranty certificate.</p>"
    },
    cookies: {
      title: "Cookie Settings",
      body: "<p>This static website uses zero invasive tracking cookies or external third-party analytics pixels. Only essential local performance enhancements are utilized.</p>"
    }
  };

  const openPolicyModal = (type) => {
    const data = policyContent[type] || policyContent.privacy;
    if (policyModalTitle) policyModalTitle.textContent = data.title;
    if (policyModalBody) policyModalBody.innerHTML = data.body;
    policyModal?.classList.add("open");
    document.body.classList.add("menu-open");
    policyModal?.setAttribute("aria-hidden", "false");
  };

  const closePolicyModal = () => {
    policyModal?.classList.remove("open");
    document.body.classList.remove("menu-open");
    policyModal?.setAttribute("aria-hidden", "true");
  };

  legalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-policy");
      openPolicyModal(type);
    });
  });

  policyCloseBtns.forEach((btn) => {
    btn.addEventListener("click", closePolicyModal);
  });

  policyModal?.addEventListener("click", (e) => {
    if (e.target === policyModal) {
      closePolicyModal();
    }
  });

  /* Global Escape Handler */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightboxModal?.classList.contains("open")) closeLightbox();
      if (policyModal?.classList.contains("open")) closePolicyModal();
    }
    if (lightboxModal?.classList.contains("open")) {
      if (e.key === "ArrowLeft") updateLightboxContent(currentGalleryIndex - 1);
      if (e.key === "ArrowRight") updateLightboxContent(currentGalleryIndex + 1);
    }
  });

  /* --------------------------------------------------------------------------
     12. LIVE STUDIO STATUS INDICATOR
     -------------------------------------------------------------------------- */
  const studioStatusPill = document.querySelector(".studio-status-pill span:last-child");
  if (studioStatusPill) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1-5 = Mon-Fri, 6 = Sat
    const hour = now.getHours();
    const min = now.getMinutes();
    const currentTime = hour + min / 60;

    let isOpen = false;
    if (day >= 1 && day <= 5) {
      isOpen = currentTime >= 8.0 && currentTime <= 18.5;
    } else if (day === 6) {
      isOpen = currentTime >= 9.0 && currentTime <= 16.0;
    }

    if (isOpen) {
      studioStatusPill.textContent = "Open Now • Studio Concierge Available";
    } else {
      studioStatusPill.textContent = "Studio Closed • Concierge Monitors 24/7";
    }
  }

  /* --------------------------------------------------------------------------
     13. CURRENT YEAR IN FOOTER
     -------------------------------------------------------------------------- */
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });

  console.log("✨ Apex Craft & Living (Demo Showcase) initialized with Glassmorphic & Polymorphic UI.");
});
