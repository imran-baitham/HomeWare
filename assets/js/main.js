/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== NEW SWIPER ===============*/
// let newSwiper = new Swiper(".new-swiper", {
//     spaceBetween: 24,
//     loop: 'true',
//     pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         576: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         1024: {
//             slidesPerView: 4,
//         },
//     },
// });

/*=============== NEW SWIPER ===============*/

let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        100: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 5,
        },
    },
})


let oldSwiper = new Swiper(".old-swiper", {
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".bx-left-arrow-alt",
        prevEl: ".bx-right-arrow-alt",
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1575: {
            slidesPerView: 5,
        },
    },
})


'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 300 ? header.classList.add("active")
        : header.classList.remove("active");
});
