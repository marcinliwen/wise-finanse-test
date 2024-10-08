window.onload = () => {
  /**
   * Search Bar
   */
  const openSearchBarDesctop = document.getElementById("openSearchBar-desktop");
  const searchBar = document.getElementById("searchBar");
  const closeSearch = document.querySelector(".close-search");
  const openSearchBarMobile = document.getElementById("openSearchBar-mobile");

  if (openSearchBarDesctop && searchBar && closeSearch) {
    openSearchBarDesctop.addEventListener("click", () => {
      if (!searchBar.classList.contains("open")) {
        searchBar.classList.add("open");
      }
    });
    closeSearch.addEventListener("click", () => {
      if (searchBar.classList.contains("open")) {
        searchBar.classList.remove("open");
      }
    });
  }
  if (openSearchBarMobile && searchBar && closeSearch) {
    openSearchBarMobile.addEventListener("click", () => {
      if (!searchBar.classList.contains("open")) {
        searchBar.classList.add("open");
      }
    });
    closeSearch.addEventListener("click", () => {
      if (searchBar.classList.contains("open")) {
        searchBar.classList.remove("open");
      }
    });
  }
  /**
   * logo animation
   */
  const logoPath = document.querySelectorAll(".logo svg path");
  if (logoPath.length > 0) {
    logoPath.forEach((path, index) => {
      setTimeout(() => {
        path.style.opacity = "1";
      }, 50 * (index + 1));
    });
  }
  /**
   * custom select
   */
  const options = document.querySelectorAll(".custom-select li");
  const selectInput = document.querySelector(".custom-select input");
  options.forEach((item) => {
    item.addEventListener("click", () => {
      selectInput.setAttribute("value", item.dataset.value);
    });
  });

  /**
   * body overflow if mobile menu is open
   */
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const menu = document.querySelector(".main-menu");
  if (openMenu) {
    openMenu.addEventListener("click", () => {
      menu.classList.add("id-open");
      document.body.classList.add("body-overflow");
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      menu.classList.remove("id-open");
      document.body.classList.remove("body-overflow");
    });
  }
  /**
   * sliders
   */
  const addcounter = (swiper) => {
    const counter = document.createElement("div");
    counter.classList.add("counter");
    counter.append(`${swiper.activeIndex + 1}/${swiper.slides.length}`);
    if (swiper.pagination.el) {
      swiper.pagination.el.prepend(counter);
    }
  };
  if (typeof Swiper !== "undefined") {
    const blogRollSwiper = new Swiper(".blog-roll-swiper", {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        enabled: true,
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      navigation: {
        nextEl: ".nav-next",
        prevEl: ".nav-prev",
      },
      on: {
        init: function (swiper) {
          //addcounter(swiper);
        },
        /* slideChange: function (swiper) {
          const counter = swiper.pagination.el.querySelector(".counter");
          counter.innerHTML = `${swiper.activeIndex + 1}/${
            swiper.slides.length
          }`;
        }, */
        breakpoint: (swiper, params) => {
          swiper.el
            .querySelector(".swiper-pagination")
            .classList.remove("swiper-pagination-disabled");
          swiper.el
            .querySelector(".swiper-pagination")
            .classList.add("swiper-pagination-bullets");
          swiper.el
            .querySelector(".swiper-pagination")
            .classList.add("swiper-pagination-horizontal");
          if (swiper.el.querySelector(".swiper-pagination")) {
            swiper.el
              .querySelector(".swiper-pagination")
              .append(`<div>1/3</div>`);
            //addcounter(swiper);
          }
        },
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
        },
        1024: { slidesPerView: 3 },
      },
    });
    if (blogRollSwiper) {
      addcounter(blogRollSwiper);
    }

    blogRollSwiper.on("breakpoint", (swiper) => {
      if (blogRollSwiper) {
        //addcounter(blogRollSwiper);
      }
    });
    /* 
    blogRollSwiper.on("breakpoint", (swiper, params) => {
      console.log(params);
      console.log(swiper.el.querySelector(".swiper-pagination "));

      swiper.el
        .querySelector(".swiper-pagination")
        .classList.remove("swiper-pagination-disabled");
      swiper.el
        .querySelector(".swiper-pagination")
        .classList.add("swiper-pagination-bullets");
      swiper.el
        .querySelector(".swiper-pagination")
        .classList.add("swiper-pagination-horizontal");
      console.log(swiper.pagination);
      if (swiper.el.querySelector(".swiper-pagination")) {
        console.log("add counter");
        addcounter(swiper);
      }
    }); */
    const productsSwiper = new Swiper(".products-swiper", {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        enabled: true,
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      navigation: {
        nextEl: ".nav-next",
        prevEl: ".nav-prev",
      },
      on: {
        init: function (swiper) {
          addcounter(swiper);
        },
        slideChange: function (swiper) {
          const counter = swiper.pagination.el.querySelector(".counter");
          counter.innerHTML = `${swiper.activeIndex + 1}/${
            swiper.slides.length
          }`;
        },
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
        },
        1024: { slidesPerView: 3 },
      },
    });
    const referencesSwiper = new Swiper(".references-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        enabled: true,
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      navigation: {
        nextEl: ".nav-next",
        prevEl: ".nav-prev",
      },
      on: {
        init: function (swiper) {
          addcounter(swiper);
        },
        slideChange: function (swiper) {
          const counter = swiper.pagination.el.querySelector(".counter");
          counter.innerHTML = `${swiper.activeIndex + 1}/${
            swiper.slides.length
          }`;
        },
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
        },
      },
    });
    const homeSwiper = new Swiper(".home-swiper", {
      slidesPerView: 1,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-100%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      pagination: {
        horizontalClass: "swiper-pagination-horizontal",
        enabled: true,
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      breakpoints: {
        1024: {
          creativeEffect: {
            prev: {
              translate: [0, "-100%", -1],
            },
            next: {
              translate: [0, "100%", 0],
            },
          },
          pagination: {
            horizontalClass: "swiper-pagination-vertival",
          },
          allowTouchMove: false,
        },
      },
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      on: {
        init: function (swiper) {
          addcounter(swiper);
        },
        slideChange: function (swiper) {
          const counter = swiper.pagination.el.querySelector(".counter");
          counter.innerHTML = `${swiper.activeIndex + 1}/${
            swiper.slides.length
          }`;
        },
      },
    });
    const tabSwiperTitles = [
      "Cass aptent nostra lorem",
      "Cass aptent nostra lorem",
      "Cass aptent nostra lorem",
    ];
    const tabSwiper = new Swiper(".tab-swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      pauseOnMouseEnter: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        enabled: true,
        el: ".tab-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className}">
            <span class="victorserif">${index < 10 && "0"}${index + 1}</span>
            ${tabSwiperTitles[index]} 
          </button>`;
        },
      },
    });
    const tabPagination = document.querySelector(".tab-pagination");
    if (tabPagination && tabSwiper) {
      /* tabPagination.addEventListener("mouseleave", () => {
        tabSwiper.autoplay.start();
      }); */
      tabPagination.addEventListener("mouseenter", () => {
        tabSwiper.autoplay.stop();
      });
    }
    const choiceSwiper = new Swiper(".swiper-choice", {
      slidesPerView: 1,
      speed: 2000,
      spaceBetween: 32,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
    });
  }

  const categoryNavBtns = document.querySelectorAll(".faq-category-nav button");
  const categoryItems = document.querySelectorAll(".category-item");
  if (categoryNavBtns && categoryItems) {
    categoryNavBtns.forEach((item, index) => {
      item.addEventListener("click", () => {
        categoryNavBtns.forEach((item) => item.classList.remove("active"));
        categoryItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        categoryItems[index].classList.add("active");
      });
    });
  }

  const languagePL = {
    days: [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
    ],
    daysShort: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"],
    daysMin: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
    months: [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ],
    monthsShort: [
      "Sty",
      "Lut",
      "Mar",
      "Kwi",
      "Maj",
      "Cze",
      "Lip",
      "Sie",
      "Wrz",
      "Paź",
      "Lis",
      "Gru",
    ],
    today: "Dzisiaj",
    clear: "Wyczyść",
    dateFormat: "yyyy-MM-dd",
    timeFormat: "hh:mm:aa",
    firstDay: 1,
  };

  let month = {
    content: "Miesiąc",
    className: "month",
    onClick: (datePicker) => {
      datePicker.setCurrentView("months");
    },
  };
  let day = {
    content: "Dzień",
    className: "day",
    onClick: (datePicker) => {
      datePicker.setCurrentView("days");
    },
  };
  let year = {
    content: "Rok",
    className: "year",
    onClick: (datePicker) => {
      datePicker.setCurrentView("years");
    },
  };
  const dateInput = document.getElementById("get-date");

  if (typeof AirDatepicker != "undefined") {
    const datePicker = new AirDatepicker("#get-date", {
      locale: languagePL,
      dateFormat: "dd/MM/yyyy",
      buttons: [year, month, day],
      isMobile: true,
      autoClose: true,
      prevHtml: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8332 15.5L3.68654 8.35333C3.6401 8.30696 3.60326 8.25188 3.57812 8.19125C3.55298 8.13062 3.54004 8.06563 3.54004 8C3.54004 7.93437 3.55298 7.86938 3.57812 7.80875C3.60326 7.74812 3.6401 7.69304 3.68654 7.64667L10.8332 0.5" stroke="#750843" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      nextHtml: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_351_1620)">
      <path d="M5.16679 0.5L12.3135 7.64667C12.3599 7.69304 12.3967 7.74812 12.4219 7.80875C12.447 7.86938 12.46 7.93437 12.46 8C12.46 8.06563 12.447 8.13062 12.4219 8.19125C12.3967 8.25188 12.3599 8.30696 12.3135 8.35333L5.16679 15.5" stroke="#750843" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_351_1620">
      <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
      </clipPath>
      </defs>
      </svg>
      `,
      //inline: true,
      onSelect: ({ date, formattedDate }) => {
        dateInput.setAttribute("value", formattedDate);
      },
      onShow: () => {
        document.body.classList.add("body-overflow");
      },
      onHide: () => {
        document.body.classList.remove("body-overflow");
      },
    });
  }

  /**
   * check media query
   */
  let isMobile = window.matchMedia("(max-width: 1024px)");
  /**
   * sticky header
   */
  const header = document.getElementById("header");
  const sticky = 68; //mobile header hight

  const stickyHeader = (target) => {
    var topDistance = 0;
    if (target > sticky) {
      header.classList.add("isFixed");
      header.style.top = `-${topDistance}`;
    } else {
      header.classList.remove("isFixed");
      header.style.top = `-${target}px`;
      topDistance = target;
    }
  };

  function headerHandler() {
    if (window.scrollY > sticky * 2) {
      header.classList.add("isFixed");
    }
    window.onscroll = function () {
      stickyHeader(window.scrollY);
    };
  }
  headerHandler();

  window.addEventListener("resize", () => {
    if (isMobile.matches) {
      headerHandler();
    }
  });
  /**
   * Intersection Observer
   */
  let observerOptions = {
    threshold: 0.25,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.25) {
        entry.target.classList.add("is_visible");
      } else {
        entry.target.classList.remove("is_visible");
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };
  let observer = new IntersectionObserver(callback, observerOptions);
  const inViews = document.querySelectorAll(".inView");
  if (inViews.length > 0) {
    inViews.forEach((inView) => {
      observer.observe(inView);
    });
  }

  let counterTargets = document.querySelectorAll(".counterUp");

  let observerCounter = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is_visible");
        setTimeout(() => {
          letCount();
        }, 1000);
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  });

  if (counterTargets.length > 0) {
    counterTargets.forEach((target) => {
      observerCounter.observe(target);
    });
  }
};

/**
 * counter animation
 */

function letCount() {
  const counters = document.querySelectorAll(".counterUp");
  const speed = 100; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.round(count + inc);
        // Call function every ms
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}
