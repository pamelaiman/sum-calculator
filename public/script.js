console.log("JavaScript file has been linked successfully.")

function CheckInput(number1) {
  var regex = /^[0-9]/;
  if (!regex.test(number1.value)) {
    input.value = number1.value.replace(/[^0-9]/g, '');
    alert("Please enter a valid integer.");
  }
}

function CheckInput(number2) {
  var regex = /^[0-9]/;
  if (!regex.test(number2.value)) {
    number2.value = number2.value.replace(/[^0-9]/g, '');
    alert("Please enter a valid integer.");
  }
}

function CalculateSum() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var sum = parseInt(number1) + parseInt(number2);
    document.getElementById("Result").innerHTML = "The sum of " + number1 + " and " + number2 + " is " + sum + ".";
    }
