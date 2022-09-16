var counter = 0;
var cursor = 0;
var cursorPrice = 20;
var cookieButton = document.getElementById("cookie");
var cursorPriceTag = document.getElementById("cursorPrice");
var counter = document.getElementById("cookieNumber");
var cursorCount = document.getElementById("cursor");
var cursorButton = document.getElementById("buyCursor");

const increment = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

function addcookie() {
  document.getElementById("cookieNumber").innerHTML = increment();
}
cursorButton.onclick = function () {
  if (cookieNumber >= cursorPrice) {
    cookieNumber = cookieNumber - cursorPrice;
    counter.innerHTML = cookieCount;

    cursor++;
    cursorCount.innerHTML = cursor;

    cursorPrice++;
    cursorPriceTag.innerHTML = cursorPrice;
  }
};
