let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  const btnReset = document.createElement("button");
  const ul = document.createElement("ul");
  //

  document.body.appendChild(btn);
  document.body.appendChild(btnReset);
  document.body.appendChild(ul);

  btn.textContent = "Dodaj 10 elementow listy";
  btn.style.fontSize = "30px";
  btnReset.textContent = "Reset";
  btnReset.style.fontSize = "30px";
  btn.style.margin = "10px";
  btnReset.style.margin = "10px";

  //   btn.style.position = "fixed";

  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", cleanLists);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `element nr: ${orderElement++}`;
    li.style.fontSize = size++ + "px";
    document.querySelector("ul").appendChild(li);
  }
};

const cleanLists = () => {
  console.log("czyszcze");
  document.querySelector("ul").innerHTML = "";
  size = 10;
  orderElement = 1;
};

init();
