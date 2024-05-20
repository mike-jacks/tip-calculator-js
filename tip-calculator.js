var billAmount = parseFloat(prompt("Bill Amount: "));
var tipPercentage = parseFloat(prompt("Tip Percentage: "));

var tipAmount = (billAmount * tipPercentage) / 100;
var totalAmount = billAmount + tipAmount;
alert(
  "Your bill amount is: $" +
    billAmount.toFixed(2) +
    "\n" +
    "Your tip percentage is " +
    tipPercentage.toFixed(2) +
    "%\n" +
    "Your tip amount is: $" +
    tipAmount.toFixed(2) +
    "\n" +
    "Your total amount is: $" +
    totalAmount.toFixed(2)
);

document.getElementById("bill-amount").textContent = "Your bill amount is: $" + billAmount.toFixed(2);
document.getElementById("tip-percentage").textContent = "Your tip percentage is " + tipPercentage.toFixed(2) + "%";
document.getElementById("tip-amount").textContent = "Your tip amount is: $" + tipAmount.toFixed(2);
document.getElementById("total-amount").textContent = "Your total amount is: $" + totalAmount.toFixed(2);
