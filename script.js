if (location.href === "https://invite-tracker.poketalebot.com/") {
  location.href = "https://data.poketalebot.org";
}
function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i) / text.length + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}
