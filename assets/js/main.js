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
    navigation: {
        nextEl: ".bx-left-arrow-alt",
        prevEl: ".bx-right-arrow-alt",
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