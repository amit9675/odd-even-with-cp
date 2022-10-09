function generateNumber() {
  // generate a random integer(hint : Math.random)
  randomN=Math.floor(Math.random()*100)
  display = document.getElementById("number")
  display.textContent = randomN
  checkOddEven(randomN)
}

function checkOddEven(num) {
  // logic for even / odd
  output=document.getElementById("odd-even")
  if(num%2==0){
    output.textContent = "This NUmber is even"
  }
  else{
    output.textContent = "This NUmber is odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  btn = document.getElementById("generate-number")
  btn.addEventListener("click",generateNumber)
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
