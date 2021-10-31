// Create 16x16 grid = 256 of square divs using a loop

//Create a loop for the code below
//const div1 = document.createElement("div");
//const div2 = document.createElement("div");
//const div3 = document.createElement("div");
// ...and so on
//div1.classList.add("grid");
//div2.classList.add("grid");
//div3.classList.add("grid");
// ...and so on
//container.appendChild(div1);
//container.appendChild(div2);
//container.appendChild(div3);
// ...and so on

const container = document.querySelector(".container")
for (i = 1; i <= 256; i++) {
  let a = "div" + i;
  a = document.createElement("div");
  a.classList.add("grid");
  container.appendChild(a);
}

// How to make sure they will be perfectly squared? 
//  - set specific height and width on the container, which will be 800px x 800px
//  - So each square will have dimensions of 50px and 50px 
// The "container" will be a flexbox. Allow flex wrap.