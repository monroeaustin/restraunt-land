import './pricing.css';
import displayContact from "./contact.js";


export default function displayPricing () {
    // Get the content div where the elements will be appended
    const homeBtn = document.getElementById('home');
    const pricingBtn = document.getElementById('pricing');
    const contactBtn = document.getElementById('contact');


    homeBtn.classList.remove('active-pg');
    contactBtn.classList.remove('active-pg');
    pricingBtn.classList.add('active-pg');

    const contentDiv = document.getElementById('content');


// Check if contentDiv exists
if (contentDiv) {
  // Create the main layout div
  const layoutDiv = document.createElement('div');
  layoutDiv.classList.add('layout');

  // Create the top section
  const topDiv = document.createElement('div');
  topDiv.classList.add('top');

  // Create the heading and subheading
  const heading = document.createElement('h2');
  heading.classList.add('head');
  heading.innerText = 'Meal Plans & Pricing';

  const subHeading = document.createElement('h3');
  subHeading.classList.add('script');
  subHeading.innerText =
    'Indulge in delicious meals tailored to your lifestyle. Choose the plan that’s right for you.';

  // Append heading and subheading to the top div
  topDiv.appendChild(heading);
  topDiv.appendChild(subHeading);

  // Create the bottom section (pricing table)
  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottom');

  const pricingTableDiv = document.createElement('div');
  pricingTableDiv.classList.add('pricing-table');

  // Create the pricing cards (Starter, Professional, Family Feast)
  const plans = [
    {
      name: 'Starter',
      price: '$9.99',
      features: ['1 meal per day', 'Free drink', 'Pickup option', 'Access to weekly specials'],
    },
    {
      name: 'Professional',
      price: '$19.99',
      features: [
        '2 meals per day',
        'Free drink',
        'Delivery included',
        'Access to premium specials',
      ],
    },
    {
      name: 'Family Feast',
      price: '$49.99',
      features: [
        '3 meals per day',
        'Family-sized portions',
        'Delivery included',
        'Exclusive perks',
      ],
    },
  ];

  // Function to create a card for each plan
  function createCard(plan) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const planName = document.createElement('h3');
    planName.innerText = plan.name;

    const planPrice = document.createElement('p');
    planPrice.classList.add('price');
    planPrice.innerText = plan.price;

    const featureList = document.createElement('ul');
    featureList.classList.add('feature-list');

    // Add features without checkmarks
    plan.features.forEach((feature) => {
      const listItem = document.createElement('li');
      listItem.appendChild(document.createTextNode(' ' + feature));
      featureList.appendChild(listItem);
    });

    const button = document.createElement('button');
    button.classList.add('cta');
    button.innerText = 'Get Started';

    button.addEventListener("click",  displayContact);

    cardDiv.appendChild(planName);
    cardDiv.appendChild(planPrice);
    cardDiv.appendChild(featureList);
    cardDiv.appendChild(button);

    return cardDiv;
  }

  // Append all the cards to the pricing table
  plans.forEach((plan) => {
    const card = createCard(plan);
    pricingTableDiv.appendChild(card);
  });

  // Append the pricing table to the bottom div
  bottomDiv.appendChild(pricingTableDiv);

  // Append the top and bottom sections to the layout div
  layoutDiv.appendChild(topDiv);
  layoutDiv.appendChild(bottomDiv);

  // Append the layout div to the content div
  contentDiv.appendChild(layoutDiv);
} else {
  console.error('Content div not found!');
}
}