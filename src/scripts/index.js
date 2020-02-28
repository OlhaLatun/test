import "../styles/index.scss";
import video from "../assets/video/earthFromSpace.mov";
import audio from "../assets/audio/spaceSounds.mp3";

console.log("webpack starterkit");

const a = 13;
const b = 12;
let sum = a + b;

console.log(sum);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const user = {
  name: "Olha",
  lastName: "Latun",
  age: 26,
  dateOfBirth: "17.01.1994",
  heigth: 155,
  petOwner: true,
  favouriteFood: ["peanut butter", "fruits", "coffee"],
  getUserNameAndDateOfBirth: function() {
    console.log(
      "Users' name and birthday is ",
      this.name + " " + this.lastName + " " + this.dateOfBirth
    );
  }
};
console.log(user);
console.log(user.favouriteFood);
user.getUserNameAndDateOfBirth();
