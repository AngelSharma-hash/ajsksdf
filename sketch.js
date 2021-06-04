var dog;
var dogIMG,doghappy;
var database;
var foodStock;
//var food;
var foodS;
function preload()
{
  dogIMG = loadImage("Dog.png");
  doghappy = loadImage("happydog.png");

}

function setup() {
	

  database = firebase.database();
  //console.log(database);

  createCanvas(500,500);

  dog = createSprite(300,300,20,20);
  dog.addImage(dogIMG);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}

function draw() { 
  background(46, 139, 87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doghappy);
   
  } 
  
  drawSprites();

  fill("red"); 
  text("Press UP_ARROW key to feed the dog",100,150);

}

function readStock(data){
  foodS=data.val();

}

 async function writeStock(x){

  var dataRef =database.ref("foodStock");

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  
}


