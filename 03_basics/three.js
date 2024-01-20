
const display = document.getElementById("display");


const buttons = document.querySelectorAll("button");


let expression = "";


for (let button of buttons) {
  button.addEventListener("click", function() {
   
    let value = button.innerHTML;

   
    if (value == "C") {
   
      display.value = "";
      expression = "";
    } else if (value == "=") {
  
      try {
        let result = eval(expression);
        display.value = result;
      } catch (error) {
       
        display.value = "Error";
      }
    } else {
   
      expression += value;
      display.value = expression;
    }
  });
}