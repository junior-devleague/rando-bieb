var howManyBiebs = 20;

function randomNumber(){
  var min = 30;
  var max = 1000;
  return Math.random() * (max - min) + min + 'px';
}

function randomBiebs() {
  var imageUrl = 'https://i.ytimg.com/vi/kffacxfA7G4/maxresdefault.jpg';
  
  for(var i = 0; i < howManyBiebs; i++){
    var xPosition = randomNumber();
    var yPosition = randomNumber();
    var element = document.createElement('img');
    element.style.position = 'absolute';
    element.style.left = xPosition;      
    element.style.top = yPosition;
    element.src = imageUrl;
    element.width = "100";
    element.height = "100";
    document.body.appendChild(element);
  }
}
