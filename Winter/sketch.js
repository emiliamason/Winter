/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                     *
 * Emilia Mason 
 *                                                     *
 * Experiment 3: Press in Case of Winter   
 *                                                     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var serial; //variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411';// my port name

var inData;

var song;
//var listOfSongs = ['Fuego.mp3', 'AguaSala.mp3', 'CositaRica.mp3']; //Array to hold the playlist of music. NOT USING THIS ANYMORE! 

var songs;
var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;

var playing;

var colors;

function preload(){
   song1 = loadSound("Fuego.mp3");
   song2 = loadSound("AguaSala.mp3");
   song3 = loadSound("CositaRica.mp3");
   song4 = loadSound("CaribeAtomico.mp3");
   song5 = loadSound("ChilangaBanda.mp3");
   song6 = loadSound("Doyourthing.mp3");
   song7 = loadSound("Siente.mp3");
   song8 = loadSound("SundayShining.mp3");

   songs = [song1,song2,song3,song4,song5,song6,song7,song8];  
   song  = random(songs);

colors = loadAnimation("Frames/Frame1.png", "Frames/Frame2.png","Frames/Frame3.png", "Frames/Frame4.png", "Frames/Frame5.png", "Frames/Frame6.png" );
//Each frame is a different color for the animation.

}

function setup() {
  createCanvas(1700, 800);  //Canvas Size
  //song.play(); // song is ready to play during setup() because it was loaded during preload
  playing = false;


//Setting up the serial port

serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', console.log);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port


}
  
function pressed(){
  if(playing){ //If songs are playing and button is pressed song stop.
song.stop();
  }else{  //If pressed again play song.
    song.play();
  }
  playing = !playing; //!= opposite 
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
function serialEvent() {
   inData = Number(serial.read());

   if(inData==0){
    pressed();
   }
   
    console.log(inData);

}


function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}



function draw(){
  background(255,255,255);  
  
  
  animation(colors, 300, 150);  //animation() will update the animation frame specified in function preload.
  print(inData);




}
