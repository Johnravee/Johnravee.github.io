"use strict";

var dark = document.querySelector('#moon'); // Get the key value of theme

var darkCheck = localStorage.getItem('dark-theme');

var darkmode = function darkmode() {
  document.body.classList.add("darkmode");
  dark.classList.toggle('bi-sun-fill');
  localStorage.setItem("dark-theme", "enable");
};

var lightmode = function lightmode() {
  document.body.classList.remove("darkmode");
  dark.classList.toggle('bi-sun-fill');
  localStorage.setItem("dark-theme", "disable");
};

if (darkCheck === "enable") {
  darkmode(); //set the dark-theme on load page
}

dark.addEventListener('click', function () {
  darkCheck = localStorage.getItem('dark-theme'); //update the value of darktheme

  if (darkCheck === 'enable') {
    lightmode();
  } else {
    darkmode();
  }
}); // Hamburger Menu 

document.querySelector('#Hamburger').addEventListener('click', function () {
  document.querySelector('.links').classList.toggle('left');
  document.body.classList.toggle("forscroll");
  document.querySelector("#Hamburger").classList.toggle("bi-x-lg");
}); //Link events

document.querySelectorAll("#link").forEach(function (li) {
  return li.addEventListener('click', function () {
    document.querySelector('.links').classList.remove('left');
    document.body.classList.remove("forscroll");
    document.querySelector("#Hamburger").classList.remove("bi-x-lg");
  });
});