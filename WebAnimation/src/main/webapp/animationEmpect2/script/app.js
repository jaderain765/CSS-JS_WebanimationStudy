const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text1 = intro.querySelector('#text1');
const text2 = intro.querySelector('#text2');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 18000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text1, 3, {opacity: 1},{opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000, // 시간
    triggerPosition: 3000,
    triggerHook: 0
})
.addIndicators()
.setTween(textAnim)
.addTo(controller);






//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount/(1 + accelamount);
    // delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    
    // video.currentTime = scrollpos;
    video.currentTime = delay;
}, 41.6);