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
