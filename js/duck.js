var duckX, duckY, duckWingAngle, y, fly, flapping,fRateSlider;

setup = function() {
    var title1=createElement('h2', 'My Animation'); 
    title1.parent('canvasContainer');
    
    var canvas1=createCanvas(400,400);
    canvas1.parent('canvasContainer');
    
    var resetBtn=createButton("restart");
    resetBtn.mousePressed(restartFunction);
    resetBtn.parent('canvasContainer');
    resetBtn.addClass('btn');
    
    var stopBtn=createButton("stop");
    stopBtn.mousePressed(stopFunction);
    stopBtn.parent('canvasContainer');
    stopBtn.addClass('btn');
    
    fRateSlider=createSlider(0,60,30);
    fRateSlider.parent('canvasContainer');
    
    noStroke();
    duckX = 100, duckY = 340;
    duckWingAngle = 14;
    y = 3;
    //global state variables
    fly = true;
    flapping = true;
    frameRate(fRateSlider.value());
};

var restartFunction=function(){
      fly = true;
      flapping = true;
      duckX = 100, duckY = 300;
      duckWingAngle = 14;
}

var stopFunction=function(){
    fly=false;
    
}

var drawDuck = function(xPos, yPos, wAngle) {
    
    var xCenter = xPos;
    var yCenter = yPos;
    var armRx = 11,
        armLx = 11;
    var furColor = color(247, 255, 0, 255);
    fill(furColor);
    //legs
    fill(255, 217, 0);
    ellipse(xCenter - 6, yCenter + 39, 5, 48);
    ellipse(xCenter - 11, yCenter + 60, 20, 7);
    //right leg
    ellipse(xCenter + 6, yCenter + 39, 5, 48);
    ellipse(xCenter + 6, yCenter + 60, 20, 7);
    //body
    fill(furColor);
    ellipse(xCenter, yCenter + 10, 30, 76);
    //head
    ellipse(xCenter, yCenter - 33, 25, 28);
    push()
    translate(xCenter, yCenter - 21);
    fill(255, 166, 0);
    triangle(-5, -10, 6, -10, 0, -3); //beak
    fill(13, 2, 2);
    ellipse(-6, -15, 5, 5); //eyes
    ellipse(6, -15, 5, 5); //eyes
    pop();
    //arm-right
    push();
    translate(xCenter + armRx, yCenter - 13);
     fill(158, 103, 2);
    rotate(-wAngle);
    ellipse(0, 16, 16, 48);
    //fill(0, 255, 26);
    ellipse(0, 0, 5, 5); //rotation point - green
    pop();
    //arm-left
    push();
    translate(xCenter - armLx, yCenter - 13);
     fill(158, 103, 2);
    rotate(wAngle);
    ellipse(0, 16, 16, 48);
   // fill(13, 0, 255);
    ellipse(0, 0, 5, 5); //rotation point - blue
    pop();
    fill(furColor); //Object center point
    ellipse(xCenter, yCenter, 5, 5);
};
var flapWings = function() {
    var angle = random(10, 40);
    if(flapping === false) { //keep wing angle constant when flapping=false 
        angle = 13;
    }
    return angle;
};

var draw = function() {
    frameRate(fRateSlider.value());
    background(63, 69, 82);
    duckWingAngle = flapWings(); //returns an random angle
    if(fly === true) {
        y = random(0, 3); //raise duck some small increment        
        duckY -= y; //negative y is up 
        if(y >= 2.5) {
            y = -2; //randomly slows the ascent
        }
    }
    if(fly === false && duckY < 305) { //while duck is above 300, keep descending
        y++; //increase y means descend without random behavior
        duckY += y;
        if(duckY > 295) { //at the bottom, stop flapping.
            flapping = false;
        }
        if(fly === false && duckY > 300) {
         //   noLoop();
          // fly = true;
          // flapping = true;
        }
    }
    if(duckY < 100) { //when duck reaches 100 pixels from the top, stop moving up
        fly = false;
    }
    push();
    drawDuck(duckX, duckY,radians(duckWingAngle));
    pop();
    text('height: ' + round(duckY), 10, 16);
    console.log('height: ' + round(duckY));
};