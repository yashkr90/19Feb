let namediv = document.getElementById("quote-class");
let nameinp = document.getElementById("name-input");
let btn = document.getElementById("btn");
let greet = document.getElementById("greet");
const quotes = [
  "Life is a journey, not a destination.",
  "The only way to do great work is to love what you do.",
  "In the midst of chaos, there is also opportunity.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

btn.addEventListener("click", () => {
    
  //var paragram = document.createElement("p");

  greet.textContent = nameinp.value + " " + quotes[Math.floor(Math.random() * quotes.length)];

  //namediv.appendChild(paragram);
});
