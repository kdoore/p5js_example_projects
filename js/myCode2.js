/**
HSB Color Wheel
 */
//global variables must be declared outside the setup function if they are going
// to be accessed outside of the setup fuction
var fillBrightness, fillSaturation, strokBrightness, strokeSaturation, angleSlice, slider, brightness;
//the setup function is only called once
var setup = function() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('myContainer');
    colorMode(HSB);
    //background(0, 0, 255);
    frameRate(2);
    textFont("Georgia");
    //initialize variables
    fillBrightness = 255; //modify to show different shades
    fillSaturation = 255; //modify to show different tints
    strokeBrightness = 201;
    strokeSaturation = 181;
    // create sliders and labels
    // brightness slider
    var labelMinVal = createSpan(' 100 ');
    labelMinVal.parent('textContainer');
    slider = createSlider(100, 255, 200); //min, max, initialVal
    slider.parent('textContainer');
    var labelBrightness = createSpan(' 255 &nbsp; Brightness');
    labelBrightness.parent('textContainer');
    // create sliders and labels
    // saturation slider
    var satMinVal = createSpan('<br> 100 ');
    satMinVal.parent('textContainer');
    satSlider = createSlider(100, 255, 200); //min, max, initialVal
    satSlider.parent('textContainer');
    var labelSaturation = createSpan(' 255 &nbsp; Saturation');
    labelSaturation.parent('textContainer');
    
    // create sliders and labels
    // angleSlice slider
    var labelAngleMin = createSpan('<br> &nbsp; &nbsp; 1 ');
    labelAngleMin.parent('textContainer');
    angleSlider = createSlider(1, 60, 10); //min, max, initialVal
    angleSlider.parent('textContainer');
    var labelAngleMax = createSpan(' 60 &nbsp;Angle Size');
    labelAngleMax.parent('textContainer');
};
var drawColorWheel = function(sliderVal) {
    //reset all initial values for color wheel
    hueValue = 0; //current color of the hueValue
    startDegree = 0; //degree parameter that starts arc
    angleSlice = angleSlider.value(); //degree 'width' of each arc.
    endDegree = angleSlice; //degree endpoint for an arc
    maxDegree = 528; //termination condition for loop
    strokeWeight(15);
    push();
    while(endDegree <= maxDegree) {
        // increment startDegree, endDegree, and hueValue
        startDegree = startDegree + angleSlice;
        endDegree = endDegree + angleSlice;
        hueValue = (startDegree % 360) * (255 / 360);
        fill(hueValue, fillSaturation, sliderVal, 200);
        stroke(hueValue, strokeSaturation, sliderVal, 200);
        arc(200, 200, 300, 300, radians(startDegree), radians(endDegree));
    }
    pop();
}
var draw = function() {
    //noLoop();
    background(0, 0, 255);
    var sliderVal = slider.value();
    var satSliderVal = satSlider.value();
    noStroke();
    fill(200, 255, 255);
    textSize(18);
    text('HSB Color wheel ', 120, 20);
    textSize(12);
    text('Brightness: ' + sliderVal, 300, 360);
    text('Saturation: ' + satSliderVal, 300, 375);
    text('Angle Size: ' + angleSlider.value(), 300, 390);
    drawColorWheel(sliderVal);
};