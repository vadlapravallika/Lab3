function blink() {
    var blinkText = document.getElementById('blinkText');
    setInterval(function () {
        blinkText.style.visibility = (blinkText.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 1000); // Change the interval (in milliseconds) to adjust the blinking speed
}

blink();

document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("billTotal");
    const tipRangeInput = document.getElementById("tip");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalBillwithtipInput = document.getElementById("totalBillwithtip");

    billTotalInput.addEventListener("input", updateTip);
    tipRangeInput.addEventListener("input", updateTip);

    function updateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipRangeInput.value);
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalBillwithtip = billTotal + tipAmount;

        if (isNaN(billTotal)) {
            alert("Please enter a valid number for Bill Total.");
            return;
        }

        tipPercentageInput.value = tipPercentage.toFixed(2);
        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillwithtipInput.value = totalBillwithtip.toFixed(2);
    }
});