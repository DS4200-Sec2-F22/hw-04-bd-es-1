// JS Code for HW3
// Brady Duncan and Evan Suslovich
// Last Modified: 10.5.2022



// starting points
const xAxis = [1, 2, 6, 9]
const yAxis = [2, 4, 2, 9]

// get viewbox by id 
const chart = document.getElementById('viewbox');


// scale of chart
const scale = 5;


// placing points 
for (let i = 0; i < xAxis.length; i++) {

  const svg = document.getElementById('viewbox'); //Get svg element
  const newElement = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //Create a path in SVG's namespace

  newElement.setAttribute("cx", xAxis[i] * scale);
  newElement.setAttribute("cy", 50 - (yAxis[i] * scale));
  newElement.setAttribute("r", 2);
  newElement.classList.add('point')
  svg.appendChild(newElement);
}


function pointClicked() {
  this.classList.toggle("border");

  let xPos = (this.getAttribute("cx") / 5);
  let yPos = 10 - (this.getAttribute("cy") / 5);

  let clickedPointInfo = "Coordinates: (" + xPos + ", " + yPos + ")";

  document.getElementById("clickedPointInfo").innerHTML = clickedPointInfo;

}


const circleList = document.getElementsByTagName("circle");

// adds event listener to each point 
for (let i = 0; i < circleList.length; i++) {
  document.getElementsByTagName("circle")[i].addEventListener("click", pointClicked);
}

// event for submit button 

function submitClicked() {
  let x = document.getElementById("xInput");
  let y = document.getElementById("yInput");

  console.log(x.value)
  console.log(y.value)




  // let xInput = document.getElementById("xInput");
  // let yInput = document.getElementById("yInput");

  // console.log(xInput)
  // console.log(yInput)

}


document.getElementById("button").addEventListener("click", submitClicked)





