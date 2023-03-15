const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const resetBtn = document.querySelector(".reset");
const cookie = document.querySelector("#cookie");
const message = document.querySelector("#mensagem");
const list = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Porque sim, às vezes, é resposta.",
  "Wake up for reality.",
  "I promise you that soon the autumn comes to darken fading summer skies.",
  "Breath.",
  "Chase the high",
  "Start to think about the plans you have made.",
  "Let it go.",
  "Sometimes worth to fight a war to get peace.",
  "Your road to glory will be rocky, but fulfilling.",
  "Nothing is impossible to a willing heart.",
];

const handleClick = () => {
  toggleScreen();
  const randomNumber = Math.round(Math.random() * list.length);
  message.innerHTML = list[randomNumber];
};

const toggleScreen = () => {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
};

resetBtn.addEventListener("click", toggleScreen);
cookie.addEventListener("click", handleClick);
