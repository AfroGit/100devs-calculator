// Required abilities of a calculator..
// Take in inputs, numbers and operators
// Accept decimals
// Display all inputs as they are entered
// Store the input
// Store previous total as start of next operation
// Prevent invalid inputs
// perform calculations on the inputs
// Clear button should clear all from the screen
// Return a result.


const keys = document.queryselector('.calculator-buttons');
keys.addEventListener('click', event => {
  const {target} = event;
  const {value} = target;
  if(!target.matches('button')){
    return;
  } else {
    console.log(`${event}`)
  }
});