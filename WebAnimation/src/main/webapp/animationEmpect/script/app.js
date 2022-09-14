const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
    hero, //변화를 줄 id 이름
    1, //변화를 할 시간(초)
    {height: "0%"}, //처음 상태
    {height: "80%", ease: Power2.easeInOut }    //변화 후 상태
    //정리하면, 길이가 0%에서 80%까지 1초에 걸려 늘어나는 효과를 출력한다.
).fromTo(
    hero, 
    1.2, 
    {width: "100%"},
    {width: "80%", ease: Power2.easeInOut }
)
.fromTo(
    slider,
    1.2,
    {x: "-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2"
    //각 이미지 효과은 위에서 부터 1, 1.2, 1,2 초 동안 차례대로 진행되는데,
    //이 -=1.2로 슬라이더 효과의 시작시간을 줄였다.
    //이 슬라이더 효과는 2번째 효과와 동시에 일어나게된다.
)
.fromTo(
    logo,
    0.5,
    {opacity: 0, x: 30 }, //
    {opacity: 1, x: 0 },
    "-=0.5"
)
.fromTo(
    hamburger,
    0.5,
    {opacity: 0, x: 30 }, //
    {opacity: 1, x: 0 },
    "-=0.5"
)
.fromTo(
    headline,
    0.5,
    {opacity: 0, x: 30 }, //
    {opacity: 1, x: 0 },
    "-=0.5"
)
