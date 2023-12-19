'use strict'

window.addEventListener('DOMContentLoaded', () => {
    // Adaptive menu
    // Burger Icon
    const burgerMenuElement = document.querySelector('.burger-menu');
    // Up-Arrow
    const upArrowElement = document.querySelector('.up');
    // Burger inside elements
    const burgerIconElement = document.querySelector('.burger');
    const burgerMenuCloseElement = document.querySelector('.burger-menu-close');
    const burgerMenuBackgroundElement = document.querySelector('.burger-menu-background');
    const burgerMenuButtonOrderElement = document.querySelector('#burgerMenuButtonOrder');
    // Burger menu elements
    const burgerMenuListElements = document.querySelectorAll('.burger-menu-background ul li');

    burgerIconElement.addEventListener('click', () => {
        burgerMenuElement.classList.add('active');
        burgerMenuBackgroundElement.classList.add('active');
        upArrowElement.classList.add('hidden');
    });
    burgerMenuCloseElement.addEventListener('click', burgerMenuListElementsClick);
    burgerMenuButtonOrderElement.addEventListener('click', burgerMenuListElementsClick);
    burgerMenuListElements.forEach(item => {
        item.addEventListener('click', burgerMenuListElementsClick);
    });

    function burgerMenuListElementsClick() {
        burgerMenuElement.classList.remove('active');
        burgerMenuBackgroundElement.classList.remove('active');
        upArrowElement.classList.remove('hidden');
    }

    // Up arrow
    upArrowElement.addEventListener('click', () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    });


    // Whatsapp
    const buttonWhatsapp = document.querySelectorAll('.whatsappIcon');
    const tel = '77471994411';
    const message = 'Здравствуйте, я хочу проконсультироваться по следующему вопросу:'
    const urlWhatsappChat = `https://wa.me/${tel}?text=${message}`;
    buttonWhatsapp.forEach(icon => icon.setAttribute('href', urlWhatsappChat));


    // Scroll To Element
    // menu
    const linkElements = document.querySelectorAll('.scrollTo');
    linkElements.forEach(linkElement => {
        const targetIdName = linkElement.getAttribute('about');
        const targetElement = document.querySelector(`#${targetIdName}`);

        scrollTo(linkElement, targetElement);
    });
    // order
    const orderButtons = document.querySelectorAll('.btn-order');
    const orderForm = document.querySelector('#order');
    orderButtons.forEach(buttonElement => {
        scrollTo(buttonElement, orderForm);
    });

    function scrollTo(element, targetElement) {
        element.addEventListener('click', () => {
            targetElement.scrollIntoView({behavior: "smooth"});
        });
    }


    // Team slider
    $('.team-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 662,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Magnific popup
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});