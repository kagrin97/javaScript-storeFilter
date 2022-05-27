const nodeList = document.querySelectorAll(".list__ul li");

const homeBtn = document.querySelector(".home");

const tshirtsBtn = document.querySelector(".tshirts");
const pantsBtn = document.querySelector(".pants");
const skirtBtn = document.querySelector(".skirt");

const blueBtn = document.querySelector(".blue");
const yellowBtn = document.querySelector(".yellow");
const pinkBtn = document.querySelector(".pink");

function inspectType(event, type) {
  const typeList = event.textContent;
  if (!typeList.includes(type)) {
    event.classList.toggle("hidden");
  }
}

function onBtn(type) {
  nodeList.forEach((event) => event.classList.remove("hidden"));
  nodeList.forEach((event) => inspectType(event, type));
}

function goHome() {
  nodeList.forEach((event) => event.classList.remove("hidden"));
}

tshirtsBtn.addEventListener("click", function () {
  onBtn("tshirts");
});
pantsBtn.addEventListener("click", function () {
  onBtn("pants");
});
skirtBtn.addEventListener("click", function () {
  onBtn("skirt");
});

blueBtn.addEventListener("click", function () {
  onBtn("blue");
});
yellowBtn.addEventListener("click", function () {
  onBtn("yellow");
});
pinkBtn.addEventListener("click", function () {
  onBtn("pink");
});

homeBtn.addEventListener("click", goHome);
