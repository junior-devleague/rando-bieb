/*
* Live Coding Example #1
*
* Function that shows the incrementing of for loops
*/
function simpleIncrementingForLoopExample() {
  for (var i = 0; i < 10; i++) {
    console.log(i + " iteration\n");
  }
}

/*
* Live Coding Example #2
*
* Function that shows a for loop iterating through
* an array to display the array values
*/
function arrayForLoopExample() {
  var array = ["Hello", "I", "Am", "Billy"];
  for (var i = 0; i < array.length; i++) {
    console.log(array[i] + " ");
  }
}

/*
* Live Coding Example #3
*
* Function that changes the divs on the page to match
* with the colors stored in the array
*/
function changeElementColors() {
  var colors = ["#0000FF", "#00e5ee", "#00FFFF"];
  var divsOnPage = document.getElementsByTagName("div");
  var p = document.getElementById("changeColor");
  for (var i = 0; i < divsOnPage.length; i++) {
    divsOnPage[i].style.backgroundColor = colors[i];
  }
  p.style.backgroundColor = colors[0];
}

/*
* Live Coding Example #4
*
* ADVANCED
*
* Application that creates image elements on the DOM
* and placed at random locations
* Calls functions randomNumber() and randomBiebs()
*
*/
const howManyBiebs = 20;

function randomNumber(){
  const min = 0;
  const max = 600;
  return Math.random() * (max - min) + min + 'px';
}

function randomBiebs() {
  const imageUrl = 'https://i.ytimg.com/vi/kffacxfA7G4/maxresdefault.jpg';

  for(let i = 0; i < howManyBiebs; i++){
    const xPosition = randomNumber();
    const yPosition = randomNumber();
    let element = document.createElement('img');
    element.style.position = 'absolute';
    element.style.left = xPosition;
    element.style.top = yPosition;
    element.src = imageUrl;
    element.width = "100";
    element.height = "100";
    document.body.appendChild(element);
  }
}