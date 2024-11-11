const names = [];
const div = document.querySelector("div");

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const name = input.value;
  if (input.value.length) {
    for (newName of names) {
      if (newName === name) {
        alert("you've already added this name");
        return;
      }
    }
    names.push(name);
    console.log(names);
    div.textContent += name + ", ";
    input.value = "";
  }
};

document.querySelector("button").addEventListener("click", addName);
