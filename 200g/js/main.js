// 200g.fr JavaScript script

// show menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if(toggle && nav){
        document.addEventListener('click', () => {
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction()));

// scroll

// using jQuery

$(document).ready(function(){
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 50){
            $(".l-header").addClass("scroll-header");
        }
        else{
            $(".l-header").removeClass("scroll-header");
        }
    })
})

// dark mode

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const seclectedTheme = localStorage.getItem('selected-theme');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light';

if(seclectedTheme){
    document.body.classList[seclectedTheme === 'dark' ? 'add': 'remove'](darkTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
})
