const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  // Clear previous results
  results.innerHTML = '';

  // Validate inputs
  if (!height || height <= 0 || isNaN(height)) {
    results.textContent = '⚠️ Please enter a valid height in cm';
    return;
  }
  if (!weight || weight <= 0 || isNaN(weight)) {
    results.textContent = '⚠️ Please enter a valid weight in kg';
    return;
  }

  // BMI formula: weight (kg) / [height (m)]²
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  // Show BMI value
  const p = document.createElement('p');
  p.textContent = `Your BMI is ${bmi}`;
  results.appendChild(p);

  // Show BMI category with color coding
  const category = document.createElement('p');
  if (bmi < 18.6) {
    category.textContent = 'You are Underweight';
    category.style.color = 'orange';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category.textContent = 'You are in the Normal range';
    category.style.color = 'green';
  } else {
    category.textContent = 'You are Overweight';
    category.style.color = 'red';
  }
  results.appendChild(category);
});
