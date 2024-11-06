const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", function (e) {
  //   console.log(e.clientX, e.clientY);
  const x = e.clientX + 1;
  const y = e.clientY + 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  h1.textContent = `${x}, ${y}`;

  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = (red + green) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

  //   document.body.style.backgroundColor = `rgb(${e.clientX / 3}, ${
  //     e.clientY / 2
  //   }, ${(e.clientX / e.clientY) * 20})`;
});
