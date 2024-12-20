import './contact.css';


export default function displayContact () {

    const homeBtn = document.getElementById('home');
    const pricingBtn = document.getElementById('pricing');
    const contactBtn = document.getElementById('contact');


    pricingBtn.classList.remove('active-pg');
    homeBtn.classList.remove('active-pg');
    contactBtn.classList.add('active-pg');

// Get the parent content div
const contentDiv = document.getElementById('content');
contentDiv.innerText = "";

// Create the container div
const container = document.createElement('div');
container.classList.add('container');

// Create section-left div
const sectionLeft = document.createElement('div');
sectionLeft.classList.add('section-left');

// Create the intro h3 element
const intro = document.createElement('h3');
intro.classList.add('intro');
intro.textContent = "Let’s Keep in Touch";

// Create the h2 element for the product description
const productDescription = document.createElement('h2');
productDescription.textContent = "We have created a new product that will help food enthusiasts, chefs, and restaurants create delicious and customized meal plans quickly and easily. Whether you're looking to prepare meals for a family, cater to a specific diet, or create a menu for your restaurant, our solution simplifies the process, ensuring you can offer tasty, tailored meals with ease..";

// Create the p elements for contact info
const phone = document.createElement('p');
phone.textContent = "+1 555 505 5050";

const email = document.createElement('p');
email.textContent = "info@designmodo.com";

const address = document.createElement('p');
address.textContent = "San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909";

// Append all section-left elements
sectionLeft.appendChild(intro);
sectionLeft.appendChild(productDescription);
sectionLeft.appendChild(phone);
sectionLeft.appendChild(email);
sectionLeft.appendChild(address);

// Create section-right div
const sectionRight = document.createElement('div');
sectionRight.classList.add('section-right');

// Create form element
const form = document.createElement('form');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');

// Create the first form group (name)
const formGroupName = document.createElement('div');
formGroupName.classList.add('form-group');

// Create the name label
const labelName = document.createElement('label');
labelName.setAttribute('for', 'first-name');
labelName.textContent = 'YOUR NAME';

// Create the budget label
const labelBudget2 = document.createElement('label');
labelBudget2.setAttribute('for', 'budget');
labelBudget2.textContent = 'BUDGET';

// Create the name input field
const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('id', 'first-name');
inputName.setAttribute('name', 'first-name');
inputName.setAttribute('required', true);
inputName.setAttribute('placeholder', 'First name');

// Append name label and input to formGroupName
formGroupName.appendChild(labelName);
formGroupName.appendChild(labelBudget2);

// Create the second form group (budget)
const formGroupBudget = document.createElement('div');
formGroupBudget.classList.add('form-group');

// Create the budget label
const labelBudget = document.createElement('label');
labelBudget.setAttribute('for', 'budget');
labelBudget.textContent = 'BUDGET';

// Create the budget select field
const selectBudget = document.createElement('select');
selectBudget.setAttribute('id', 'budget');
selectBudget.setAttribute('name', 'budget');
selectBudget.setAttribute('required', true);

// Create the budget options
const optionDefault = document.createElement('option');
optionDefault.setAttribute('value', '');
optionDefault.setAttribute('disabled', true);
optionDefault.setAttribute('selected', true);
optionDefault.textContent = '$0- $500';

const optionLow = document.createElement('option');
optionLow.setAttribute('value', 'low');
optionLow.textContent = '$500 - $1000';

const optionMedium = document.createElement('option');
optionMedium.setAttribute('value', 'medium');
optionMedium.textContent = '$1000 - $5000';

const optionHigh = document.createElement('option');
optionHigh.setAttribute('value', 'high');
optionHigh.textContent = '$5000+';

// Append options to the select element
selectBudget.appendChild(optionDefault);
selectBudget.appendChild(optionLow);
selectBudget.appendChild(optionMedium);
selectBudget.appendChild(optionHigh);

// Append budget label and select to formGroupBudget
formGroupBudget.appendChild(inputName);
formGroupBudget.appendChild(selectBudget);

// Create the second form group (email)
const formGroup2 = document.createElement('div');
formGroup2.classList.add('form-group2');

// Create the email label
const labelEmail = document.createElement('label');
labelEmail.setAttribute('for', 'email');
labelEmail.textContent = 'EMAIL';

// Create the email input field
const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('required', true);
inputEmail.setAttribute('placeholder', 'name@email.com');

// Append email elements to formGroup2
formGroup2.appendChild(labelEmail);
formGroup2.appendChild(inputEmail);

// Create the third form group (message)
const formGroup3 = document.createElement('div');
formGroup3.classList.add('form-group2');

// Create the message label
const labelMessage = document.createElement('label');
labelMessage.setAttribute('for', 'message');
labelMessage.textContent = 'YOUR MESSAGE';

// Create the message textarea
const textAreaMessage = document.createElement('textarea');
textAreaMessage.setAttribute('id', 'message');
textAreaMessage.setAttribute('name', 'message');
textAreaMessage.setAttribute('required', true);
textAreaMessage.setAttribute('placeholder', 'Message');

// Append message elements to formGroup3
formGroup3.appendChild(labelMessage);
formGroup3.appendChild(textAreaMessage);

// Create the checkbox form group (send copy)
const formGroupLast = document.createElement('div');
formGroupLast.classList.add('form-group', 'last');

// Create the checkbox label
const labelCheckbox = document.createElement('label');
labelCheckbox.setAttribute('id', 'box');

// Create the checkbox input
const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('name', 'send-copy');
checkbox.setAttribute('id', 'send-copy');

// Create the checkbox text
const checkboxText = document.createElement('span');
checkboxText.textContent = 'Send me a copy';

// Append checkbox input and text to label
labelCheckbox.appendChild(checkbox);
labelCheckbox.appendChild(checkboxText);

// Create the submit button
const sendButton = document.createElement('button');
sendButton.setAttribute('type', 'submit');
sendButton.textContent = 'Send';

// Append checkbox and button to formGroupLast
formGroupLast.appendChild(labelCheckbox);
formGroupLast.appendChild(sendButton);

// Append all form groups to the form
form.appendChild(formGroupName);
form.appendChild(formGroupBudget);
form.appendChild(formGroup2);
form.appendChild(formGroup3);
form.appendChild(formGroupLast);

// Append the form to section-right
sectionRight.appendChild(form);

// Append section-left and section-right to the container
container.appendChild(sectionLeft);
container.appendChild(sectionRight);

// Append the container to the content div
contentDiv.appendChild(container);
}