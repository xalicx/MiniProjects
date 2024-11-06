const scroller = document.createElement("div");
document.body.appendChild(scroller);

let size = 100;
let heightGrow = true;

document.body.style.height = 10000 + "px";

const scrollStyle = scroller.style;
scrollStyle.position = "fixed";
scrollStyle.width = "100%";
scrollStyle.left = 0;
scrollStyle.top = 0;
scrollStyle.backgroundColor = "green";
scrollStyle.height = size + "px";

const changeWeight = function () {
  if (size > window.innerHeight / 2) {
    heightGrow = !heightGrow;
  } else if (size <= 0) {
    heightGrow = !heightGrow;
  }

  if (heightGrow) {
    size += 10;
    scrollStyle.backgroundColor = "green";
  } else {
    size -= 10;
    scrollStyle.backgroundColor = "red";
  }
  scrollStyle.height = size + "px";
};

window.addEventListener("scroll", changeWeight);
