// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = parseFloat(entries.get("dividend"));
  const divider = parseFloat(entries.get("divider"));

  // Check if either input is empty or not a number
  if (isNaN(dividend) || isNaN(divider)) {
    result.innerHTML = "Something critical went wrong. Please reload the page";
    console.error("Invalid input: Not a number");
    throw new Error("Invalid input: Not a number");
  }

  // Check if divider is 0 or negative
  if (divider <= 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Invalid division: Divider is 0 or negative");
    return; // Exit the function, don't proceed with division
  }

  const divisionResult = dividend / divider;
  const wholeNumberResult = Math.floor(divisionResult);
  result.innerText = wholeNumberResult;
});
