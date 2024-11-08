const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = ["Ala", "Agata", "Klara", "Basia", "Ola", "Julia", "Kasia"];
const prefix = [
  "It seems to me that the best name will be",
  "I have a feeling that the best name will be",
  "I 100% claim that the best name will be",
];

const nameGenerator = () => {
  const indexName = Math.floor(Math.random() * names.length);
  const indexPrefix = Math.floor(Math.random() * prefix.length);
  div.textContent = `${prefix[indexPrefix]}: ${names[indexName]}`;
};

btn.addEventListener("click", nameGenerator);
