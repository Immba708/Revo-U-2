var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var male = document.getElementById("m");
var male = document.getElementById("m");
let resultArea = document.querySelector(".comment");

modalText = document.querySelector("#modaltext");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && Female.checked == false)
  ) {
    modalText.innerHTML = "All fields are required!";
  } else {
    countBmi();
  }
}

function countBmi() {
  var p = { agevalue, heightvalue, weightvalue };
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
}

var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

var result = "";
if ((bmi < 18, 5)) {
  result = "Underweight";
} else if ((18, 5 <= bmi && bmi <= 24.9)) {
  result = "Healthy";
} else if (25 <= bmi && bmi <= 29.9) {
  result = "Overweight";
} else if (30 <= bmi && bmmi <= 34.9) {
  result = "Obese";
} else if (35 <= bmi) {
  result = "Extremly obese";
}

resultArea.style.display = "Block";
document.querySelector(".comment").innerHTML =
  'You are <span id="comment">${result}</span>';
document.querySelector("#result").innerHTML = bmi.toFixed(2);

// When the user cliks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user cliks on <span> (x), close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
