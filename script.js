// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});


// ===============================
// Navbar Shadow While Scrolling
// ===============================

window.addEventListener("scroll",function(){

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

    }

    else{

        nav.style.boxShadow="none";

    }

});


// ===============================
// Reveal Animation
// ===============================

const cards=document.querySelectorAll(

".brand-card,.promotion-card,.service-card,.content-card,.contact-box"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".8s";

observer.observe(card);

});
// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 2000);

});
window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 2000);

});