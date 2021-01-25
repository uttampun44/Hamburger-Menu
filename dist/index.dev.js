"use strict";

var ham = document.querySelector('ham');
var nav = document.querySelector('nav');
ham.addEventListener('click', toogleHamburger);

var toogleHamburger = function toogleHamburger(ham) {
  nav.classList.toggle('showNav');
  ham.classList.toggle('closeNav');
};