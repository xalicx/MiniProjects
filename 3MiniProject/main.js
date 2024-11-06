const btn = document.querySelector("button");
const allLi = document.querySelectorAll("li");

let size = 10;

const showList = function () {
  size++;

  //   for (i = 0; i < allLi.length; i++) {
  //     if (allLi[i].style.display != "block") {
  //       allLi[i].style.display = "block";
  //     }
  //     allLi[i].style.fontSize = size + "px";
  //   }

  allLi.forEach((li) => {
    if (li.style.display != "block") {
      li.style.display = "block";
    }
    li.style.fontSize = size + "px";
  });
};

btn.addEventListener("click", showList);
