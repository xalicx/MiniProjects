document.body.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  if (x % 2 === 0 && y % 2 === 0) {
    document.body.style.backgroundColor = "red";
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "green";
  }
});
