// Create 16x16 = 256 of square divs using a loop
// The loop follows the logic below:
// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
// ...and so on 
// div1.classList.add("grid");
// div2.classList.add("grid");
// div3.classList.add("grid");
// ...and so on 
// container.appendChild(div1);
// container.appendChild(div2);
// container.appendChild(div3);
// ...and so on

const container = document.querySelector(".container")
for (i = 1; i <= 256; i++) {
  let a = "div" + i;
  a = document.createElement("div");
  a.classList.add("grid");
  container.appendChild(a);
}

// Need a reference to all square divs
const squarediv = document.querySelectorAll("div.grid");

// I have deviated from the project instructions.
// Instead of drawing a sketch by hovering the cursor over the grid without clicking any button,
// I chose a more natural approach. The user should be able to draw when they press and hold
// their mouse button, and stop drawing when they release it.
// For those features, we need the grid to listen to and act on two kinds of events:
// 'mouseup' and 'mousedown'.
squarediv.forEach(function (element) {
  element.addEventListener('mousedown', OnMouseDown);
  element.addEventListener('mouseup', OnMouseUp);
});

// The function below is added primarily for the removeEventListener method, 
// but it also cleans up the code.
function ChangeColor(e) {
  e.target.style.backgroundColor = "blue";
}

// When the mouse button is pressed down, change the color at the target div.
// Then convert all other divs to listen to "mouseenter" event so 
// when the cursor moves over them, their color changes as well.
function OnMouseDown(e) {
  e.target.style.backgroundColor = "blue";
  squarediv.forEach(element => {
    element.addEventListener("mouseenter", ChangeColor);
  });
}

// We don't want to draw anymore when we release the mouse button.
// So when the button is released,
// stop changing color by removing the event listener from all divs.
function OnMouseUp() {
  squarediv.forEach(element => {
    element.removeEventListener('mouseenter', ChangeColor);
  });
};

// The code below is added in case the mouse button is held and released outside of the grid.
// So we need a way to remove the 'mouseenter' event listener if the action above occurs.
// That is, remove the 'mouseenter' event listener when the click is released anywhere
// on the document.
document.addEventListener('mouseup', OnMouseUp);

const button = document.querySelector("button");
button.addEventListener('click', CreateNewGrid);

function CreateNewGrid() {
  squarediv.forEach(element => {
    element.style.backgroundColor = "white";
  });
};