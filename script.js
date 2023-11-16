const nav = document.querySelector('.menu');
const navItems = document.querySelectorAll(".menuItems")
const hamburger = document.querySelector('.hamburger');
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const hideMeOnHamburger = document.querySelectorAll("hideMeOnHamburger");
let mybutton = document.getElementById("myBtn");
const navbar = document.getElementById("NavBar");

//! For hamburger
function toogleNav() {
    if(nav.classList.contains('showNav')){
        nav.classList.remove('showNav');
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        nav.style.display = "none";
    } else {
        nav.classList.add('showNav');
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        nav.style.display = null;
    }
}
hamburger.addEventListener('click', toogleNav);

//! For Upward scroll behaviour on navbar
var lastScrollTop = 0;
const mediaQuery = window.matchMedia('(max-width: 450px)')

// when ever page will be loaded, hamburger gonna open up under 450px width of device
if(mediaQuery.matches){
    toogleNav(); 
}

window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if(mediaQuery.matches){
        
    } else {
        if (st > lastScrollTop) {
            // downscroll code
            nav.style.display = "none";
            navbar.style.position = null;
        } else if (st < lastScrollTop) {
            // upscroll code
            if(lastScrollTop > 600){
                nav.style.display = null;
                navbar.style.position = "fixed";
                nav.style.background = "#000";
                nav.style.color = "#fff";
            } else if (lastScrollTop <= 600){
                nav.style.background = "transparent";
            }
            if(lastScrollTop < 100){
                nav.style.display = null;
                navbar.style.position = "fixed";
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
    
}, false);

//! For To Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//! animation
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i , reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();