const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["oNe", "tWO"];
const messages = ["super", "cool!"];

// firt try
// passwords.forEach((pass, index) => {
//   passwords[index] = pass.toLowerCase();
// });

// secound try:
const newPasswords = passwords.map((word) => word.toLowerCase());

const showMessage = (e) => {
  //code
  div.textContent = "";

  //   passwords.forEach((passwords, index) => {
  //     //passwords.toLocaleLowerCase();
  //     if (passwords.toLowerCase() === e.target.value.toLowerCase()) {
  //       div.textContent = messages[index];
  //       e.target.value = "";
  //     }
  //   });
  const textInput = e.target.value.toLowerCase();
  for (let i = 0; i < newPasswords.length; i++) {
    if (textInput === newPasswords[i]) {
      div.textContent = messages[i];
      e.target.value = "";
    }
  }
};

input.addEventListener("input", showMessage);
