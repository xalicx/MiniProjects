Math.random() * 7; // from 0 to 7 (without 7)

Math.random() * (6 - 4) + 4; // from 4 to 6 (without 6)

const randomNumber = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return number;
};

Math.floor(Math.random() * (6 - 4 + 1) + 4); // from 4 to 6 (with 6)

const numberRandomInt = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};
