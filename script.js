//  Main conversion function    
function convertNumber() {    
  const fromBase = parseInt(document.getElementById("fromBase").value);    
  const toBase = parseInt(document.getElementById("toBase").value);    
  const input = document.getElementById("inputNumber").value.trim().replace(/\s+/g, "");    
  const outputEl = document.getElementById("outputNumber");

  //  Check for empty input    
  if (input === "") {    
    outputEl.innerText = "⚠️ Please enter a number!";    
    return;    
  }    

  // Prevent negative values    
  if (input.startsWith("-")) {    
    outputEl.innerText = "⚠️ Negative values are not allowed!";    
    return;    
  }    

  //  Valid character patterns based on base    
  const validChars = {    
    2: /^[01]+$/,    
    8: /^[0-7]+$/,    
    10: /^[0-9]+$/,    
    16: /^[0-9A-Fa-f]+$/    
  };    

  // Validate input characters    
  if (!validChars[fromBase].test(input)) {    
    outputEl.innerText = "⚠️ Invalid characters for selected base!";    
    return;    
  }    

  //  Convert input to decimal    
  const decimal = parseInt(input, fromBase);    

  if (isNaN(decimal)) {    
    outputEl.innerText = "⚠️ Invalid input!";    
    return;    
  }    

  //  Convert decimal to desired base and display result in UPPERCASE    
  const result = decimal.toString(toBase).toUpperCase();    
  outputEl.innerText = `Result: ${result}`;    
}    

//  On page load    
window.onload = function () {    
  // Show notes section    
  document.querySelector('.notes').addEventListener('click', function () {    
    document.querySelector('.content').style.display = 'none';    
    document.querySelector('.header').style.display = 'none';    
    document.getElementById('notesSection').style.display = 'block';    
  });    
};    

// Back to main converter    
function showMain() {    
  document.querySelector('.content').style.display = 'block';    
  document.querySelector('.header').style.display = 'flex';    
  document.getElementById('notesSection').style.display = 'none';    

document.getElementById("inputNumber").value = "";

document.getElementById("outputNumber").innerText = "";

}
