/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("check");



var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var alles = document.querySelector("main");


var lijn1 = document.querySelector(".hamburger_line1");
var lijn2 = document.querySelector(".hamburger_line2");
var lijn3 = document.querySelector(".hamburger_line3");



hamburger.addEventListener("click", function () {
    menu.classList.toggle("tevoorschijn");
    alles.classList.toggle("verschuiven");
    hamburger.classList.toggle("clicked");


    lijn1.classList.toggle("yay");
    lijn2.classList.toggle("yay");
    lijn3.classList.toggle("yay");
});




// FOOTER ACCORDION

var button1 = document.querySelector(".accor1");
var content1 = document.querySelector(".accor1_items");
var button2 = document.querySelector(".accor2");
var content2 = document.querySelector(".accor2_items");
var button3 = document.querySelector(".accor3");
var content3 = document.querySelector(".accor3_items");



button1.addEventListener("click", function () {
    content1.classList.toggle("show_items");
});

button2.addEventListener("click", function () {
    content2.classList.toggle("show_items");
});

button3.addEventListener("click", function () {
    content3.classList.toggle("show_items");
});
