$(document).ready(function(){

    const navbar = $(".navbar");
    const homebg = $(".homeBG");
    const menu = $(".nav_menu");
    const links = $(".nav_links");
    const sections = $("section");
    const config = {
        rootMargin: "0px",
        threshold: [0.6, 0.9],
    };


    function handleLlinks() {
        if (window.innerWidth <= 1200) {
            links.toggleClass('visible');
        }
    }

    menu.click(function(){
        handleLlinks();
    }) 

    links.click(function(){
        handleLlinks();
    })

    window.scroll(function() {
        window.scrollY > 100 && (navbar.style.background = 'rgba(0,0,0,0.9)');
        window.scrollY < 100 && (navbar.style.background = 'transparent');
    });


    let observer = new IntersectionObserver(function(entries, self){
        $(entries).each(function(entry){
            if(entry.isIntersecting) {
                intersectionHandler(entry);
            } 
        });
    }, config);
 
    $(sections).each(function(section){
        observer.observe($("section")[0]);
    });
      
    function intersectionHandler(entry) {
        const id = entry.target.id;
        const currentlyActive = $(".nav_links .active");
        const shouldBeActive = $(".nav_links [data-ref=" + id + "]");
      
        if (currentlyActive) {
            currentlyActive.removeClass("active");
        }
        if (shouldBeActive) {
            shouldBeActive.addClass("active");
        }
    }
      
    $('.bxslider1').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        pause: 3000,
        randomStart: true,
        slideWidth: 400,
        responsive: true,
        autoHover: true
    });

    $('.bxslider').bxSlider({
        mode: 'vertical',
        captions: false,
        auto: true,
        pause: 3000,
        randomStart: true,
        slideWidth: 1000,
        responsive: true,
        autoHover: true,
    });


    ScrollReveal().reveal(".navbar", { delay: 200 });
    ScrollReveal().reveal(".home_profile", { delay: 200 });
    /*ScrollReveal().reveal(".home__title", { delay: 200 });
    ScrollReveal().reveal(".section_title", { delay: 250 });
    ScrollReveal().reveal(".section_subtitle", { delay: 350 });
    ScrollReveal().reveal(".about_description", { delay: 350 });
    ScrollReveal().reveal(".about__summary", { delay: 450 });
    ScrollReveal().reveal(".button--cta", { delay: 550 });
    ScrollReveal().reveal(".skill__title", { delay: 450 });
    ScrollReveal().reveal(".skill__item", { delay: 450 });
    ScrollReveal().reveal(".services__item", { delay: 450 });
    ScrollReveal().reveal(".portfolio__item", { delay: 450 });
    ScrollReveal().reveal(".contact__item", { delay: 450 });
    */
    ScrollReveal().reveal("footer", { delay: 200 });


})