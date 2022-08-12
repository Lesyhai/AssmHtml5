
// Video button
document.querySelector('#container2').style.display = "none";
function showbanner() {
  var vd = document.querySelector('#container2 .video video');
  var x = document.querySelector('#container2');
  console.log([vd]);

  if (x.style.display == "none") {
    x.style.display = "flex"
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
    x.style.transition = ".6s";
    vd.play();
  } else {
    x.style.display = "none";
    x.style.transition = ".6s";
    vd.pause();
    vd.load();
  }
}

// Slick 

$(document).ready(function () {
  $('.Optimists__main__slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false ,
      dots:true,

  });
});

//Load %

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 95;
let speed = 30;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      red ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let progressBart = document.querySelector(".circular-progress2");
let valueContainert = document.querySelector(".value-container2");

let progressValuet = 0;
let progressEndValuet = 85;
let speedt = 30;

let progresst = setInterval(() => {
  progressValuet++;
  valueContainert.textContent = `${progressValuet}%`;
  progressBart.style.background = `conic-gradient(
    red ${progressValuet * 3.6}deg,
    #cadcff ${progressValuet * 3.6}deg
  )`;
  if (progressValuet == progressEndValuet) {
    clearInterval(progresst);
  }
}, speedt);

let progressBarth = document.querySelector(".circular-progress3");
let valueContainerth = document.querySelector(".value-container3");

let progressValueth = 0;
let progressEndValueth = 90;
let speedth = 30;

let progressth = setInterval(() => {
  progressValueth++;
  valueContainerth.textContent = `${progressValueth}%`;
  progressBarth.style.background = `conic-gradient(
    red ${progressValueth * 3.6}deg,
    #cadcff ${progressValueth * 3.6}deg
  )`;
  if (progressValueth == progressEndValueth) {
    clearInterval(progressth);
  }
}, speedth);


// Slick bottom

$(document).ready(function () {
  $('.content__checkout__main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false ,
      dots:true,

  });
});

//Slide coment
$(document).ready(function () {
  $('.box__coment').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows:true,
      dots:false,

  });
});

// Frequently click text

document.querySelector('.icn #icn1').style.display = "none";
document.querySelector('#text').style.display = "none";
function showtext() {
  var x = document.querySelector('#text');
  var h2 = document.querySelector('#h2');
  var btn = document.querySelector('#icn1');
  var btn2 = document.querySelector('#icn2');
  var act = document.querySelector('.Question__Frequently');

  if (x.style.display == "none") {
    x.style.display = "block";
    x.style.transitiondelay = "3s";
    btn.style.display = "block";
    btn.style.color = "#ea1e00";
    h2.style.color = "#ea1e00";
    btn2.style.display = "none";
    act.style.height = "170px";
  } else {
    x.style.display = "none";
    x.style.transition = ".6s";
    btn2.style.display = "block";
    h2.style.color = "black";
    btn.style.display = "none";
    act.style.height = "90px";
  }
}

//Slick end
$(document).ready(function () {
  $('.Slick__end__slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: true,
      arrows:true,
      dots:false,
  });
});

// Scroll menu
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.menu__header');

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    nav.style.top = '0';
    nav.style.padding = '2px 0';
    nav.style.transition = " .3s linear";
  } else {
    nav.style.top = '68px';
    nav.style.padding = '0';
  }
})