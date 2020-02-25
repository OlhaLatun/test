import "../styles/index.scss";

console.log("webpack starterkit");

const a = 13;
const b = 12;
let sum = a + b;

console.log(sum);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const fruits = {
  fruits: "grapes, bananas, oranges"
};

const sweets = {
  sweets: "chocolate, peanut butter, ice-cream"
};

const favouriteFood = [fruits, sweets];

const user = {
  name: "Olha",
  lastName: "Latun",
  age: 26,
  dateOfBirth: "17.01.1994",
  heigth: 155,
  petOwner: true,
  getUserNameAndDateOfBirth: function() {
    console.log(
      "Users' name and birthday is ",
      this.name + " " + this.lastName + " " + this.dateOfBirth
    );
  }
};
console.log(user);
user.getUserNameAndDateOfBirth();
console.log(favouriteFood);
