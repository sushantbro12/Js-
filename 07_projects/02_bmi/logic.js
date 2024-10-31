const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please provide a valid height";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    // Check BMI ranges
    let message;
    if (BMI < 18.6) {
      message = "Underweight";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      message = "Normal";
    } else {
      message = "Overweight";
    }

    // Display the BMI and the message
    results.innerHTML = `<p>BMI: <span>${BMI}</span></p><p>Status: ${message}</p>`;
  }
});
