const number = document.querySelector('.number');
const count = document.querySelector('.number-play');
let startnumber = 0;
let endnumber = 1650;
number.innerHTML = startnumber;



// --------------min- max-----------//
function countUp(count) {
    number.innerHTML = count;
    if (count < endnumber) {
        setTimeout(() => countUp(count + 1), 0)
    }
}
count.addEventListener('mouseover', () => { countUp(startnumber) });

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
 

//--------------slick slider-----------//

    $(document).ready(function () {
        $('.list-item-slick-up').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            infinite: true,
            arrows: false ,
            dots:true,
    
        });
    });





//------------slick slider down----------//
$(document).ready(function () {
    $('.list-slick-down').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: false,
        dots:true,

    });
});


///--------- menu-mobiole-------//

var mobile = document.querySelector('.g i');
var menuMobile = document.querySelector('.menu-mobile');
mobile.addEventListener('click',()=>{
    menuMobile.classList.toggle("acctive")
})

var close =document.querySelector('.icon-close i').addEventListener("click",function(){
   menuMobile.classList.toggle("acctive")
})

