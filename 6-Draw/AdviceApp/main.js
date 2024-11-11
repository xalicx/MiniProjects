const options = ["option 1", "option 2"];

const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".clean");
const showAdviceBtn = document.querySelector(".showAdvice");
const showOptionsBtn = document.querySelector(".showOptions");

const addOption = (e) => {
  console.log("click");
  const input = document.querySelector("input");
  const option = input.value;
  e.preventDefault();
  if (input.value.length) {
    options.push(option);
    alert(`you have added option: ${option}`);
    input.value = "";
  }
};

const resetArray = () => {
  event.preventDefault();
  document.querySelector("h1").textContent = "";

  options.length = 0;
};

const showAdvice = () => {
  const index = Math.floor(Math.random() * options.length);
  console.log(index);
  document.querySelector("h1").textContent = options[index];
};

const showOptions = () => {
  alert(options.join("-- --"));
};

addBtn.addEventListener("click", addOption);
resetBtn.addEventListener("click", resetArray);
showAdviceBtn.addEventListener("click", showAdvice);
showOptionsBtn.addEventListener("click", showOptions);
