const calculatorDisplay = document.getElementById("calculator-display");
const calculatorButtons = document.querySelectorAll("#calculator-buttons button");

let currentValue = "0";
let firstValue = null;
let operator = null;
let waitingForValue = false;

function updateDisplay() {
    calculatorDisplay.textContent = currentValue;
}

function calculate(first, second, operator) {
    if (operator === "+") {
        return first + second;
    }

    if (operator === "−") {
        return first - second;
    }

    if (operator === "×") {
        return first * second;
    }

    if (operator === "÷") {
        return second === 0 ? "Error" : first / second;
    }
}

calculatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            if (waitingForValue) {
                currentValue = value;
                waitingForValue = false;
            } else {
                if (value === "." && currentValue.includes(".")) {
                    return;
                }

                currentValue = currentValue === "0" ? value : currentValue + value;
            }

            updateDisplay();
            return;
        }

        if (value === "AC") {
            currentValue = "0";
            firstValue = null;
            operator = null;
            waitingForValue = false;

            updateDisplay();
            return;
        }

        if (value === "±") {
            currentValue = String(Number(currentValue) * -1);

            updateDisplay();
            return;
        }

        if (value === "%") {
            currentValue = String(Number(currentValue) / 100);

            updateDisplay();
            return;
        }

        if (value === "+" || value === "−" || value === "×" || value === "÷") {
            firstValue = Number(currentValue);
            operator = value;
            waitingForValue = true;

            return;
        }

        if (value === "=") {
            if (firstValue === null || operator === null) {
                return;
            }

            const secondValue = Number(currentValue);

            currentValue = String(calculate(firstValue, secondValue, operator));

            firstValue = null;
            operator = null;
            waitingForValue = true;

            updateDisplay();
        }
    });
});
