// scroll menu
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.menu__header');
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
 let intervals = 100;

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