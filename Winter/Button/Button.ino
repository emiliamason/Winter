/*
 * Emilia Mason
 * 
 * Button Input 
 *  
 * 
 * 
 */

int buttonPin = 9;  // 
int buttonState;  //variable that will hold the On / Off state of the button.

int state = HIGH;      // the current state of the output pin
int reading;           // the current reading from the input pin
int previous = LOW;    // the previous reading from the input pin
int outdata; 


void setup() {
pinMode(buttonPin, INPUT_PULLUP);   //set the pin to be an input and and turn on the pullup resistor
Serial.begin(9600);  //Turn on the Serial port so we can see the button's value
}

void loop() {


reading = digitalRead(buttonPin);
  // if the input just went from LOW and HIGH and we've waited long enough
  // to ignore any noise on the circuit, toggle the output pin and remember

  if (reading == HIGH && previous == LOW) {
    if (state == HIGH)
      state = LOW;
    else
      state = HIGH;
      
  }

   Serial.println(state);
  //previous = reading;          
                         

}
