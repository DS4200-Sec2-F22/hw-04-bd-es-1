// JS Code for HW3
// Brady Duncan and Evan Suslovich
// Last Modified: 10.6.2022



// starting points
const xAxis = [1, 2, 6, 9]
const yAxis = [2, 4, 2, 9]


// get viewbox by id 
const chart = document.getElementById('viewbox');


// scale of chart
const scale = 5;


// plot points on the scatter plot
function plotPoint(x, y) {

  const svg = document.getElementById('viewbox'); //Get svg element
  const newElement = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //Create a path in SVG's namespace

  newElement.setAttribute("cx", x * scale);
  newElement.setAttribute("cy", 50 - (y * scale));
  newElement.setAttribute("r", 2);
  newElement.classList.add('point')
  newElement.addEventListener("click", pointClicked);
  svg.appendChild(newElement);
}


// place the starting points 
for (let i = 0; i < xAxis.length; i++) {
  plotPoint(xAxis[i], yAxis[i])
}


// when clicked, add the border to a point and set the corresponding text
// box to state its coordinates
function pointClicked() {
  this.classList.toggle("border");

  let xPos = (this.getAttribute("cx") / 5);
  let yPos = 10 - (this.getAttribute("cy") / 5);

  let clickedPointInfo = "Last point clicked: (" + xPos + ", " + yPos + ")";

  document.getElementById("clickedPointInfo").innerHTML = clickedPointInfo;

}

// all points on thge scatter plot
const circleList = document.getElementsByTagName("circle");


// adds event listener to each point 
for (let i = 0; i < circleList.length; i++) {
  document.getElementsByTagName("circle")[i].addEventListener("click", pointClicked);
}


// when the submit button is clicked, plot the new point
function submitClicked() {
  let x = Number(document.getElementById("xInput").value);
  let y = Number(document.getElementById("yInput").value);

  plotPoint(x, y)
}


// assign an event handler to the form submit button
document.getElementById("button").addEventListener("click", submitClicked)







