
// GSAP animation
function loader() {
    const TLLOAD = gsap.timeline({
        default: {
            ease: "power2"
        }
    });

    TLLOAD 
    .from('.home-container .header', {width: 0, duration: .5, delay: .5 })
    .from('.home-container .hero .place-img', {"clip-path": "polygon(0 0, 0% 100%, 0% 100%, 0% 0%)", duration: .8, deplay: 1}, "-=.5")
    .from('.home-container .hero nav ul li', {y: "100%", opacity: 0, stagger: '.1s', duration: 0.3}, "+=.3")
    .from('.home-container .content', {height: 0, duration: .5})
    .from('.home-container .content h6 span', {top: '100%', duration: .3})
    .from('.home-container .content h5 span', {top: '100%', duration: .3}, "-=.1")
    .from('.home-container .content p span', {top: '100%', stagger: '.1s', duration: .3})
    .from('.home-container .content button', {height: '0', duration: .3});
}

function animateContent() {
    const TLCONTENT = gsap.timeline({
        default: {
            ease: "power2"
        }
    });

    TLCONTENT
    .from('.home-container .content', {height: 0, duration: .5})
    .from('.home-container .content h6 span', {top: '100%', duration: .3})
    .from('.home-container .content h5 span', {top: '100%', duration: .3}, "-=.1")
    .from('.home-container .content p span', {top: '100%', stagger: '.1s', duration: .3})
    .from('.home-container .content button', {height: '0', duration: .3});
}

// Call the loader function when the window loads
window.addEventListener('load', loader);

// Set interval to call the animateContent function every 5 seconds
setInterval(animateContent, 5000);



// Event listener for when an element's AOS animation is triggered and enters the viewport
document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
// Event listener for when an element's AOS animation concludes and leaves the viewport
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });

// AOS initialization
AOS.init({
    once: false
});

// Anime.js animation
anime.timeline({loop: true})
    .add({
        targets: '.title .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.title',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Swiper initialization
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


// Granim js

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});