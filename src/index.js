// index.js
import "./home.js";
import "./pricing.js";
import "./canvas.css";
import "./contact.js";
import displayHome from "./home.js";
import displayPricing from "./pricing.js";
import displayContact from "./contact.js";

const homeBtn = document.getElementById('home');
const pricingBtn = document.getElementById('pricing');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', function(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerText = "";
    displayHome();
})

pricingBtn.addEventListener('click', function(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerText = "";
    displayPricing();
})

contactBtn.addEventListener('click', function(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerText = "";
    displayContact();
})