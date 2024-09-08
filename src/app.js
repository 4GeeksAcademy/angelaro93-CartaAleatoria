/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let symbol = ["♦", "♥", "♠", "♣"];
  let symbolTop = document.querySelector(".symbol-top");
  let number = document.querySelector(".number");
  let symbolBottom = document.querySelector(".symbol-bottom");
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

  number.textContent = randomNumber;
  symbolTop.textContent = randomSymbol;
  symbolBottom.textContent = randomSymbol;
};
