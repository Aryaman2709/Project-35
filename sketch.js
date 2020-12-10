//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock = database.ref('food')
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.25
  
}


function draw() { 
  background(46,139,87); 

  if(keyWentDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage(happyDogImage);
    foodS = foodS - 1;
    
  }

  drawSprites();
  fill("black");
  textSize(20);
  text("Food Remaining: "+foodS, 160, 450);
  text("Press Up Arrow key to feed Drago Milk", 100,50);
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food: x
  });

}



