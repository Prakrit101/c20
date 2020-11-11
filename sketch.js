var fr,mr


function setup() {
  createCanvas(800,400);
  fr=createSprite(200, 200, 50, 50);
  mr=createSprite(100,200,50,50)
  fr.shapeColor="yellow"
  mr.shapeColor="yellow"
}

function draw() {
  background("black");
  mr.x=World.mouseX
  mr.y=World.mouseY  
  if(fr.x-mr.x<fr.width/2+mr.width/2&&
    mr.x-fr.x<fr.width/2+mr.width/2&&
    fr.y-mr.y<fr.height/2+mr.height/2&&
    mr.y-fr.y<fr.height/2+mr.height/2){
    fr.shapeColor="red"
    mr.shapeColor="red" 
    }
    else{
      fr.shapeColor="yellow"
      mr.shapeColor="yellow" 
    }
  
  drawSprites();
}