/**
HSB Color Wheel
 */
//global variables must be declared outside the setup function if they are going
// to be accessed outside of the setup fuction
var fillBrightness, fillSaturation, strokBrightness, strokeSaturation, hueValue, startDegree, angleSlice, endDegree, maxDegree;
//the setup function is only called once
//
//
var setup = function() {
    createCanvas(400, 400);
    colorMode(HSB);
    background(0, 0, 255);
    angleMode = "degrees";
    strokeWeight(41);
    //declare and initialize variables
    fillBrightness = 256; //modify to show different shades
    fillSaturation = 265; //modify to show different tints
    strokeBrightness = 201;
    strokeSaturation = 181;
    hueValue = 0; //current color of the hueValue
    startDegree = 0; //degree parameter that starts arc
    angleSlice = 10; //degree 'width' of each arc.
    endDegree = angleSlice; //degree endpoint for an arc
    maxDegree = 528; //termination condition for loop
};

var drawColorWheel=function(){
    while(endDegree <= maxDegree) {
        // increment startDegree, endDegree, and hueValue
        startDegree = startDegree + angleSlice;
        endDegree = endDegree + angleSlice;
        hueValue = (startDegree % 360) * (255 / 360); 
        fill(hueValue, fillSaturation, fillBrightness, 200);
        stroke(hueValue, strokeSaturation, strokeBrightness);
        arc(200, 200, 300, 300, radians(startDegree), radians(endDegree));
    }
    
}

var draw = function() {
    noLoop();
   drawColorWheel();
};