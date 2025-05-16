// Product Data
const products = [
  {
    name: "Bamboo Toothbrush",
    price: 99,
    ecoScore: 9,
    image: "./bamboo toothbrush.jpg"
  },
  {
    name: "Reusable Water Bottle",
    price: 199,
    ecoScore: 8,
    image: "./reusable water bottle.jpeg"
  },
  {
    name: "Eco-Friendly Detergent",
    price: 249,
    ecoScore: 8,
    image: "./detergents.jpg"
  },
  {
    name: "Organic Cotton Bag",
    price: 149,
    ecoScore: 10,
    image: "./cotton bag.jpg"
  },
  {
    name: "Compostable Plates",
    price: 89,
    ecoScore: 7,
    image: "./plate.jpg"
  }
];

// Render Products
function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p class="eco-score">Eco Score: ${product.ecoScore}/10</p>
    `;
    container.appendChild(card);
  });
}

// Contact Form Submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  form.reset();
});

// Typing Text Effect
const typingElement = document.querySelector(".typing");
const phrases = ["Shop Smart.", "Live Green.", "Support Sustainability."];
let phraseIndex = 0, charIndex = 0;
function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typingElement.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

// Theme Toggle
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.querySelectorAll(".card, .category, input, textarea, nav, footer").forEach(el => {
    el.classList.toggle("dark-mode-element");
  });
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
scrollTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Animate Impact Counters
function animateCounter(id, end, speed) {
  let current = 0;
  const increment = Math.ceil(end / 100);
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(interval);
    }
    element.textContent = current;
  }, speed);
}

// On Load
window.onload = () => {
  displayProducts();
  type();
  animateCounter("co2-counter", 1500, 30);
  animateCounter("plastic-counter", 320, 40);
  animateCounter("orders-counter", 7500, 10);
};
// Chatbot Toggle
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotToggle.onclick = () => {
  chatbotBox.style.display = chatbotBox.style.display === "flex" ? "none" : "flex";
};

// Simple Bot Response
chatbotInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;
    appendMessage("You", userMessage);
    respondToMessage(userMessage.toLowerCase());
    chatbotInput.value = "";
  }
});

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function respondToMessage(message) {
  let response = "Sorry, I didn't understand that. Try asking about products, eco score, or contact info.";

  if (message.includes("hello") || message.includes("hi")) {
    response = "Hi there! 🌱 I'm EcoBot. Ask me anything about EcoCart!";
  } else if (message.includes("products") || message.includes("sell") || message.includes("items")) {
    response = "We sell eco-friendly products like bamboo toothbrushes, reusable water bottles, metal straws, cloth bags, and more.";
  } else if (message.includes("eco score") || message.includes("eco-friendly")) {
    response = "Eco Score is a rating out of 10 that reflects a product's environmental impact. The higher the score, the more sustainable it is!";
  } else if (message.includes("contact") || message.includes("email")) {
    response = "You can reach us through the contact form on the website, or email us at support@ecocart.com.";
  } else if (message.includes("delivery") || message.includes("shipping")) {
    response = "We offer free delivery on orders over ₹500. Delivery usually takes 3–5 working days.";
  } else if (message.includes("return") || message.includes("refund")) {
    response = "Yes! We offer a 7-day easy return policy. If you’re not satisfied, just contact us.";
  } else if (message.includes("payment")) {
    response = "We accept payments via UPI, credit/debit cards, and net banking.";
  } else if (message.includes("discount") || message.includes("coupon")) {
    response = "Use code **ECO10** at checkout to get 10% off your first order!";
  } else if (message.includes("support") || message.includes("help")) {
    response = "I’m here to help! Ask me about products, eco scores, shipping, or anything else about EcoCart.";
  } else if (message.includes("eco-friendly products") || message.includes("green products")) {
    response = "Eco-friendly products are made with minimal environmental impact. Examples include reusable straws, biodegradable plates, bamboo items, and recycled-paper products.";
  } else if (message.includes("track order") || message.includes("order status")) {
    response = "To track your order, go to your account dashboard and click 'Track Order'. You’ll need your order ID.";
  } else if (message.includes("cancel order")) {
    response = "You can cancel your order within 12 hours of placing it. Visit your orders page or contact support.";
  } else if (message.includes("account") || message.includes("register")) {
    response = "Click on the 'Sign Up' button at the top-right corner to create an EcoCart account.";
  } else if (message.includes("how to buy") || message.includes("purchase")) {
    response = "Just browse the products, add your favorites to the cart, and click 'Checkout' to complete the purchase.";
  } else if (message.includes("is ecocart safe") || message.includes("secure payment")) {
    response = "Absolutely! EcoCart uses SSL encryption and secure payment gateways to protect your information.";
  } else if (message.includes("working hours") || message.includes("timing")) {
    response = "Our support team is available from 9:00 AM to 6:00 PM, Monday through Saturday.";
  } else if (message.includes("whatsapp") || message.includes("chat")) {
    response = "We are working on WhatsApp integration! For now, you can use this chatbot or email support@ecocart.com.";
  } else if (message.includes("partnership") || message.includes("collaborate")) {
    response = "We love collaborating! Please reach out to partnerships@ecocart.com with your proposal.";
  } else if (message.includes("eco tips") || message.includes("sustainability tips")) {
    response = "Sure! Tip: Carry a cloth bag when shopping. Avoid single-use plastics. Switch to LED bulbs and conserve water!";
  } else if (message.includes("new products") || message.includes("latest items")) {
    response = "We add new eco-products every week! Check the 'New Arrivals' section on our homepage.";
  } else if (message.includes("bulk order") || message.includes("wholesale")) {
    response = "Yes, we offer bulk and wholesale discounts! Please email bulk@ecocart.com for a custom quote.";
  } else if (message.includes("do you plant trees") || message.includes("tree planting")) {
    response = "Yes! For every 10 orders placed, we plant a tree through our Green Future program 🌳.";
  }

  // Respond after a short delay
  setTimeout(() => {
  appendMessage("EcoBot", response);
  speak(response);
}, 500);

}
// Quick Button Interaction
document.querySelectorAll(".quick-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const userMsg = btn.textContent;
    appendMessage("You", userMsg);
    respondToMessage(userMsg.toLowerCase());
  });
});
// Speech Recognition Support
const micBtn = document.getElementById("mic-btn");
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-IN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

micBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onstart = () => {
  micBtn.textContent = "🎙️"; // active
};

recognition.onresult = (event) => {
  const voiceInput = event.results[0][0].transcript;
  appendMessage("You", voiceInput);
  respondToMessage(voiceInput.toLowerCase());
};

recognition.onerror = (event) => {
  appendMessage("EcoBot", "Sorry, I didn't catch that. Try again.");
};

recognition.onend = () => {
  micBtn.textContent = "🎤";
};

// Speech Synthesis (Text to Voice)
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-IN";
  window.speechSynthesis.speak(utter);
}
