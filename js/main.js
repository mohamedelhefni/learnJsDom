// todo: make random color for background for lesson div

var colors = ["#40407a", "#706fd3", "#34ace0", "#227093"],
  ncolors = ["#2c3e50", "#33d9b2", "#b33939"], // colors array
  lessons = document.getElementsByClassName("lesson"); // get all divs with class lesson
for (var i = 0; i < lessons.length; i++) {
  // fetch element from objec lessons to lesson
  var lesson = lessons[i],
    loon = colors[Math.floor(Math.random() * colors.length)]; // ? :) set variable loon to select random color from colors array

  setColor(lesson, loon); // * call the function

  function check() {
    if (
      lesson.style.backgroundColor ==
      lesson.previousElementSibling.style.backgroundColor
    ) {
      again();
    }
  }
  check();

  function again() {
    var newLoon = ncolors[Math.floor(Math.random() * ncolors.length)];
    setColor(lesson, newLoon);
    check();
  }
}

function setColor(element, color) {
  // the function to setColor To lesson

  element.style.backgroundColor = color;
}

// todo: get image with URL and if input is empty display error
// todo: And Create IMG Element

function getImg() {
  var link = document.forms[0].url.value; // * get url from input field with document.forms
  var img = document.createElement("img"), // * create Element IMG
    images = document.getElementById("images"); // * Get Div With ID Images To Put Img On IT

  if (link == "") {
    // ! check if the value of url empty or not
    document.getElementsByClassName("errMsg")[0].style.display = "block";
  } else {
    document.getElementsByClassName("errMsg")[0].style.display = "none";
  }

  img.src = link; // * Put The Src Of img from input Value (url)
  images.appendChild(img); //* Append Image In Div OF Iamges
}

// todo: Add Class Danger To Paragraph

function addDanger() {
  document.getElementsByClassName("toDanger")[0].className =
    "danger lead mt-1 mb-1";
}

// * start Example 1 At Lesson 5
var changedP = document.getElementsByClassName("changed")[0]; // * get Element With the Class Changed
function checkClass() {
  // check For Changed Classes
  // * check classes of the paragraph
  var classes = document.getElementById("pClasses");
  classes.innerHTML = changedP.classList[4]; // change the content of the span
}

function toWarning() {
  // ? the funtion to check if it has class danger or info or success if it had remove it and add class warn
  if (
    changedP.classList.contains("danger") ||
    changedP.classList.contains("info") ||
    changedP.classList.contains("success")
  ) {
    changedP.classList.remove("danger", "info", "success");
    changedP.classList.add("warn");
  } else {
    changedP.classList.add("warn");
  }
  checkClass(); // * check for changed class
}
function toDang() {
  // ! toDanger was Used Before
  // ? the funtion to check if it has class warn or info or success if it had remove it and add class danger
  if (
    changedP.classList.contains("warn") ||
    changedP.classList.contains("info") ||
    changedP.classList.contains("success")
  ) {
    changedP.classList.remove("warn", "info", "success");
    changedP.classList.add("danger");
  } else {
    changedP.classList.add("danger");
  }
  checkClass(); // * check for changed class
}
function toInfo() {
  // ? the funtion to check if it has class danger or warn or success if it had remove it and add class info
  if (
    changedP.classList.contains("danger") ||
    changedP.classList.contains("warn") ||
    changedP.classList.contains("success")
  ) {
    changedP.classList.remove("danger", "warn", "success");
    changedP.classList.add("info");
  } else {
    changedP.classList.add("info");
  }
  checkClass(); // * check for changed class
}
function toSuccess() {
  // ? the funtion to check if it has class danger or warn or info if it had remove it and add class success
  if (
    changedP.classList.contains("danger") ||
    changedP.classList.contains("warn") ||
    changedP.classList.contains("info")
  ) {
    changedP.classList.remove("danger", "warn", "info");
    changedP.classList.add("success");
  } else {
    changedP.classList.add("success");
  }
  checkClass(); // * check for changed class
}

// ? our Simple Todo List

function addTask() {
  var todo = document.getElementById("todo"), // * get the parent div
    order = document.createElement("li"), // * Create The Element li
    task = document.getElementById("task"); // * Get The input field
  var err = document.getElementById("errTask");
  if (task.value == "") {
    err.style.display = "block";
  } else {
    err.style.display = "none";
    order.textContent = task.value;
    order.className = "task";
    todo.insertBefore(order, todo.firstChild);
    task.value = "";
  }
}

// todo : make custom style from fields (color , bg color) then clone it for another P

var testP = document.getElementById("testP"); // get the p to apply changes on it,
color = document.getElementById("color"); // get the color field to take his value,
bgColor = document.getElementById("bg-color"); // get the bg-color field to get his value,
clondedP = document.getElementById("cloned"); // get the clonded div to append p on it;

function applyStyle() {
  // * apply style on click on the button to change the color and bg-color of testP
  testP.style.color = color.value;
  testP.style.backgroundColor = bgColor.value;
}

function clone() {
  // * make clone with cloneNode(false) to bring only the style and class and id
  var copy = testP.cloneNode(false);
  copy.textContent = "Clone Style Test";
  clondedP.appendChild(copy);
}

// todo: hide the parent of the span on click it
var hide = document.getElementById("hide");

hide.onclick = function() {
  this.parentElement.style.display = "None";
};

// todo : simple validate with userName field

var user = document.getElementById("Name"),
  getFocus = document.getElementById("getFocus"),
  loseFocus = document.getElementById("loseFocus");

getFocus.onclick = function() {
  user.focus();
};

loseFocus.onclick = function() {
  user.blur();
};

// todo: make Simple Game Eat Monsters

var eat = document.getElementById("eat"),
  monsters = document.getElementsByClassName("monster");
var i = 0;

function eatMonster() {
  "use strict";
  monsters[i].style.display = "none";
  i++;
}

function powerUp() {
  eat.setAttribute("src", "img/powerpackman.png");
  eat.addEventListener("click", function() {
    eatMonster();
  });
}

// todo : make popup alert move with mouse

var popup = document.getElementById("popup");

window.onmousemove = function(e) {
  var x = e.clientX,
    y = e.clientY;
  popup.style.top = y + 10 + "px";
  popup.style.left = x + 10 + "px";
};

// todo: get span with id date and change content to last modified date
document.getElementById("date").textContent = document.lastModified;
