import './home.css';
import displayContact from "./contact.js";

export default function displayHome (){
    const homeBtn = document.getElementById('home');
    const pricingBtn = document.getElementById('pricing');
    const contactBtn = document.getElementById('contact');


    pricingBtn.classList.remove('active-pg');
    contactBtn.classList.remove('active-pg');
    homeBtn.classList.add('active-pg');



    const contentDiv = document.getElementById('content');
    // Create the <h1> element
    const heading1 = document.createElement('h1');
    heading1.textContent = 'Forget About Cooking';
    
    // Create the <h2> element
    const heading2 = document.createElement('h2');
    heading2.textContent = 'Our Restaurant Experience gives you complete freedom to savor every moment — no need to worry about prepping, cooking, or cleaning. Just pure indulgence and zero hassle.';
    heading2.classList.add('Home');
    // Create the <button> element
    const button = document.createElement('button');
    button.className = 'cta';
    button.textContent = 'Order Now';
    button.classList.add('ready');
    button.addEventListener("click",  displayContact);
    
    // Append the elements in the correct order
    contentDiv.appendChild(heading1);
    contentDiv.appendChild(heading2);
    contentDiv.appendChild(button);



}
displayHome();
