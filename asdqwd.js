const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// navbar side responsive
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// nightmode dark-theme
var icon_night = document.getElementById("icon_night");

icon_night.onclick = function() {
    document.body.classList.toggle("dark-theme");
}

// end nightmode dark-theme



const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = " Family";
            }, 0);
            setTimeout(() => {
                text.textContent = " Friendly";
            }, 2000);
            setTimeout(() => {
                text.textContent = " Funny";
            }, 4500);
            setTimeout(() => {
                text.textContent = " Fantastic";
            }, 7000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 4000);

   
//   parallax

// let head =document.getElementById('head');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     head.style.top = value *1.5 + 'px';


// })



