function answer(val) {
  console.log("The answer is", val);
  const name = "Earth";
  if (val == name) {
    alert("You are right!");
    console.log("Right");
  } else {
    alert("Wrong answer");
    console.log("Wrong");
  }
}

function buttonClick() {
  console.log("You clicked me!");
}

function showTodaysDate() {
  alert(Date());
}

function bigImg(size) {
  size.style.width = "400px";
}

function normalImg(size) {
  size.style.width = "200px";
}

function pageIsLoaded() {
  console.log("Page is loaded");
}

function changeColor() {
  const iconColor = document.getElementsByTagName("i")[0];
  iconColor.style.color = "green";
  iconColor.addEventListener("mouseout", () => {
    const returnColor = document.getElementsByTagName("i")[0];
    iconColor.style.color = "royalblue";
  });
}

window.changeColor = changeColor;
window.pageIsLoaded = pageIsLoaded;
window.bigImg = bigImg;
window.normalImg = normalImg;
window.showTodaysDate = showTodaysDate;
window.answer = answer;
window.buttonClick = buttonClick;
