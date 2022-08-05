function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
//ex 1 e 2
const divButtonsContainer = document.querySelector(".buttons-container");
const ulIdDays = document.querySelector("#days");

function createLi(father, array) {
  for (let i = 0; i < array.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = array[i];
    if (array[i] === 24 || array[i] === 31) {
      newLi.className = "day holiday";
    } else if (array[i] === 4 || array[i] === 11 || array[i] === 18) {
      newLi.className = "day friday";
    } else if (array[i] === 25) {
      newLi.className = "day holiday friday";
    } else {
      newLi.className = "day";
    }
    father.appendChild(newLi);
  }
}
function createElement(father, element, placeholder, classes) {
  let createdElement = document.createElement(element);
  createdElement.className = classes;
  createdElement.innerText = placeholder;
  father.appendChild(createdElement);
}

createLi(ulIdDays, decemberDaysList);
createElement(divButtonsContainer, "button", "Feriados", "btn-holiday");
const holidayButton = document.querySelector(".btn-holiday");
//ex 3, 4 e 5
let positionHoliday = 2;
let positionFriday = 2;
holidayButton.addEventListener("click", function () {
  positionHoliday += 1;
  let elemToChange = document.getElementsByClassName("holiday");
  for (let i = 0; i < elemToChange.length; i++) {
    if (positionHoliday % 2 !== 0) {
      elemToChange[i].style.backgroundColor = "red";
      elemToChange[i].style.color = "white";
    } else {
      elemToChange[i].style.backgroundColor = "rgb(238,238,238)";
      elemToChange[i].style.color = "grey";
    }
  }
});
createElement(divButtonsContainer, "button", "Sexta-Feira", "btn-friday");
const fridayButton = document.querySelector(".btn-friday");
let textHolder = [];
fridayButton.addEventListener("click", function () {
  positionFriday += 1;
  let elemToChange = document.getElementsByClassName("friday");
  if (positionFriday === 3) {
    for (let i = 0; i < elemToChange.length; i++) {
      textHolder.push(elemToChange[i].innerText);
    }
  }
  console.log(textHolder);

  for (let i = 0; i < elemToChange.length; i++) {
    if (positionFriday % 2 !== 0) {
      elemToChange[i].innerHTML = "Sextoou!!";
    } else {
      elemToChange[i].innerHTML = textHolder[i];
    }
  }
});

// Ex 6
// ulIdDays.addEventListener("mouseover", function (event) {
//   event.target.style.fontSize = "30px";
// });
// ulIdDays.addEventListener("mouseout", function (event) {
//   event.target.style.fontSize = "22px";
// });

function dayMouseOver() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function dayMouseOut() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}

dayMouseOut();
dayMouseOver();

//Ex  7 e 8
function addTask(task, color) {
  let father = document.querySelector(".my-tasks");
  let createSpan = document.createElement("span");
  let createDiv = document.createElement("div");
  createDiv.style.backgroundColor = color;
  createSpan.innerText = task;
  father.appendChild(createSpan);
  father.appendChild(createDiv);
}
addTask("Project Day", "blue");
addTask("Interview Day", "red");

//ex 9
function taskSelector(event) {
  let selectDiv = document.querySelector(".my-tasks").childNodes[4];
  selectDiv.addEventListener("click", function () {
    if (selectDiv.className === "task-selected") {
      selectDiv.className = "";
    } else {
      selectDiv.className = "task-selected";
    }
  });
}
taskSelector();

//ex 10
function paintTaskColor() {
  ulIdDays.addEventListener("click", function (event) {
    let getColor =
      document.querySelector(".my-tasks").childNodes[4].style.backgroundColor;
    let getClass = document.querySelector(".my-tasks").childNodes[4].className; //como fazer o elemento ser a seleção do usario
    console.log(getClass, getColor);
    if (getClass === "task-selected") {
      event.target.style.color = getColor;
    } else {
      event.target.style.color = "grey";
    }
  });
}
paintTaskColor();

//bonus
function addCommitment() {
  let list = document.querySelector(".task-list");
  let input = document.getElementById("task-input");
  let inputBox = document.querySelector("#btn-add");
  inputBox.addEventListener("click", function () {
    let text = input.value;
    console.log(text);
    if (text === "") {
      alert("Por favor insira algo para adicionar");
    } else {
      createElement(list, "li", text);
      input.value = "";
    }
  });
}
addCommitment();
