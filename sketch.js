var myLoc;
var myMap;
var canvas;

var mappa = new Mappa('Leaflet');


var carnevaleLat = 43.866667;
var carnevaleLng = 10.233333;


options = {
  lat: 0,
  lng: 0,
  zoom: 6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var carnevale = {
	lat: carnevaleLat,
	lng: carnevaleLng,
	name: 'migliorCarnevaleDiSempre',
}

function preload(){
  myLoc = getCurrentPosition();
}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


}


function draw() {
 textFont("Anton");
  clear();
  //
  var belCarnevale = calcGeoDistance(myLoc.latitude, myLoc.longitude, carnevaleLat, carnevaleLng, "km");
  fill(255);
  textSize(14);
  var pointCarnevale = myMap.latLngToPixel(carnevaleLat, carnevaleLng);

  //
  noStroke();
  fill(0,0,255);
  strokeWeight(4);
  textSize(40);
  text('SEI A SOLI ' + Math.round(belCarnevale) + 'KM DAL MIGLIOR CARNEVALE DEL GLOBO' , 50, 50);

  //
  fill(255);
  stroke(4);
  textSize(40);
  var pointHere = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);

  push();
  stroke(1);
  strokeWeight(2);
  line(pointHere.x, pointHere.y, pointCarnevale.x, pointCarnevale.y);
  pop();
  fill("tomato");
  ellipse(pointHere.x, pointHere.y, 20);
  fill("teal");
  ellipse(pointCarnevale.x, pointCarnevale.y, 20);

  fill("gold");
  text('TU', pointHere.x -35, pointHere.y-15);
  text('IL MIGLIOR CARNEVALE DI SEMPRE', pointCarnevale.x-10, pointCarnevale.y+50);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
