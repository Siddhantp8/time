const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time = hour;

var bg ;

function preload() {
     getBackgroundImg( ) 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    
    Engine.update(engine);

     text(500,500,"time = 0");
     stroke(255);


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour >= 05 && hour <= 06) {
        bg = "sunrise1.png";
    }
    
    if(hour >= 06 && hour <= 08) {
        bg = "sunrise2.png";
    }

    if(hour >= 08 && hour <= 09) {
        bg = "sunrise3.png";
    }

    if(hour >= 10 && hour <= 12) {
        bg = "sunrise5.png";
    }

    if(hour >= 12 && hour <= 15) {
        bg = "sunrise6.png";
    }

    if(hour >= 15 && hour <= 16) {
        bg = "sunset7.png";
    }
    backgroundImg = loadImage(bg)

    if(hour >= 17 && hour <= 18) {
        bg = "sunset8.png";
    }
    backgroundImg = loadImage(bg)

    if(hour >= 18 && hour <= 20) {
        bg = "sunset7.png";
    }
    backgroundImg = loadImage(bg)

    if(hour >= 20 && hour <= 22) {
        bg = "sunset9.png";
    }
    backgroundImg = loadImage(bg)

    if(hour >= 0 && hour <= 02) {
        bg = "sunset10.png";
    }
    backgroundImg = loadImage(bg)

    if(hour >= 02 && hour <= 04) {
        bg = "sunset11.png";
    }
    backgroundImg = loadImage(bg)

    if(hour >= 04 && hour <= 06) {
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg)

}
