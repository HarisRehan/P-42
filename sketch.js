//Name of Project: Tick Tock
//Develloper: Haris
//Goal of Project: Create a program that draws the clock for you and shows the time to find your way out.

//Declaring Variables
var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle; 

function setup() {
  createCanvas(800,400);

  //setting angle mode to degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  

  //translation and rotation
  translate(200,200);
  rotate(-90);
  //calculating time
  hr = hour();
  mn = minute();
  sc = second();
  //to create iterative rotation
  scAngle = map(sc,0,60,0,360); //maping the value of seconds 0-60 in relation with 0-360 angle
  mnAngle = map(mn,0,60,0,360); //maping the value of minutes 0-60 in relation with 0-360 angle
  hrAngle = map(hr %12,0,12,0,360); //maping the value of hour 0-12 in relation with 0-360 angle
  
  //drawing seconds hand
  push();
  rotate(scAngle); //roatate the seconds hand based on the seconds angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minutes hand
  push();
  rotate(mnAngle); //roatate the minutes hand based on the minutes angle calculated
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  

  //drawing hour hand
  push();
  rotate(hrAngle); //roatate the hour hand based on the hour angle calculated
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  //drawing the origin point
  stroke(255,255,0);
  point(0,0);
  //drawing the arc
  strokeWeight(10);
  noFill();

  //seconds arc
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  //minutes arc
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

   //hours arc
   stroke(0,0,255);
   arc(0,0,260,260,0,hrAngle);
   
}