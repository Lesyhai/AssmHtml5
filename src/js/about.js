
// Video button
document.getElementById('container2').style.display = "none"
function showProduct() {
  var vd = document.querySelector('#container2 .video video');
  var x = document.getElementById('container2');
  console.log([vd]);

  if (x.style.display == "flex") {
    x.style.display = "none"
    x.style.transition = ".6s";
    vd.pause();
    vd.load();
  } else {
    x.style.display = "flex"
    x.style.justifyContent = "center"
    x.style.alignItems = "center"
    vd.play();
  }
}



$(document).ready(function () {
  $('.box__coment').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false ,
      dots:false,

  });
});

// scroll menu
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

// run number

let valuesdisplays = document.querySelectorAll('.number');
let intervals = 5000;

valuesdisplays.forEach((valuedisplay) => {
 let startvalue = 0;
 let endvalue = parseInt(valuedisplay.getAttribute('data-val'));

 let duration = Math.floor(intervals / endvalue);
 let counter = setInterval(function() {
   startvalue += 1;
   valuedisplay.textContent = startvalue;
   if (startvalue == endvalue){
     clearInterval(counter);
   }
 }, duration);
});