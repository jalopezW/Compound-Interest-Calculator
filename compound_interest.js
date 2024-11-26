const principalInput = document.querySelector("#principal");
const aprSlider = document.querySelector("#apr");
const aprOutput = document.querySelector("#aprOutput");
const frequencyInput = document.querySelector("#frequency");
const yearsInput = document.querySelector("#years");
const accumulatedOutput = document.querySelector("#accumulated");
const totalOutput = document.querySelector("#total");

// Update APR output on slider input
aprSlider.addEventListener("input", () => {
  aprOutput.textContent = `${aprSlider.value}%`;
  calculate();
});

// Recalculate when inputs change
[principalInput, frequencyInput, yearsInput].forEach((input) => {
  input.addEventListener("input", calculate);
});

function calculate() {
  // Get values from inputs
  const principal = parseFloat(principalInput.value); // parseFloat func converts strings to floats
  const apr = parseFloat(aprSlider.value) / 100; // Convert percentage, freq, and years to decimal
  const frequency = parseFloat(frequencyInput.value);
  const years = parseFloat(yearsInput.value);

  // Check if inputs are valid, but not necessary bc number input
  if (
    isNaN(principal) ||
    isNaN(apr) ||
    isNaN(frequency) ||
    isNaN(years) ||
    principal <= 0 ||
    frequency <= 0 ||
    years <= 0
  ) {
    accumulatedOutput.textContent = "$0.00";
    totalOutput.textContent = "$0.00";
    return; 
    // If any inputs are invalid, the interest and total amount are set to "$0.00"
  }

  // Compound interest calculation
  const accumulatedInterest =
    principal * Math.pow(1 + apr / frequency, frequency * years) - principal; // (base, exponent) also interest earned
  const totalAmount = principal + accumulatedInterest;


  accumulatedOutput.textContent = `$${accumulatedInterest.toFixed(2)}`;
  totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
}
