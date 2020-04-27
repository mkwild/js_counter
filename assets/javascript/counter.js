// The best-practice is to pull all the elements into variables, in order to avoid
// searching the HTML tree for these elements more than once:
let incrementButton = document.querySelector("#increment"); 
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter"); 

// This is the "event listener" for clicking the button.
// Use the console.log function to display some text in the console when the button is clicked:
incrementButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter.innerHTML) + 1;
    if(newCounterValue >= 10) {
        counter.style.color = "red";
    }
    counter.innerHTML = newCounterValue;
  });

  decrementButton.addEventListener("click", function() {
      console.log("- button clicked");
      let newCounterValue = parseInt(counter.innerHTML) - 1;
      if(newCounterValue < 10) {
          counter.style.color = "black";
      }
      if (counter.innerHTML > 0) {
          counter.innerHTML = newCounterValue;
      }
  })