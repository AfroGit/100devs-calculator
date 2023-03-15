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


const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', event => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return;
  } else {
    calculator.parseInput(value)
    // console.log(`${value}`)
  }
});


const calculator = {
  displayText: '0',
  prevTotal: null,
  
  parseInput (value){
        // sort through "special buttons" to check if  clicked.
    switch (value){
      case '=':
        this.calcAnswer(this.displayText)
       // calculate answer.
        break;
        
      case 'AC':
        this.clearAll()
        // clear screen plus stored values
        break;
        
      case '.':
        if (this.displayText == 0){
          this.addText('0.')
          // pass '0.' into add text method.
        } else {
          this.addText(value);
          // add value into text string.
        }
        break;
      default:
        this.addText(value);
        // add value to text string.
        break;

        



        
    }
    
  },

  addText(value){
    if(this.displayText === '0'){
      this.displayText = '';
    } else if(this.prevTotal !== null){
      this.displayText = this.prevTotal
      this.prevTotal = null
    }
    if(isNaN(+(value)) && isNaN(+(this.displayText))){
      if(isNaN(this.displayText.slice(-1))){
        return;
        
      }
      
    }
    this.displayText += value;
    this.outputText(this.displayText)
  },

  outputText(text){
    document.querySelector('.calculator-screen').value = text
  },

  calcAnswer(equation){
    let result = Function('return ' + equation)() //regex function
      this.outputText(result)
    
  },

  clearAll(){
    this.displayText = '0',
    this.prevTotal = null,
    this.outputText(this.displayText)
  }
  
};
//