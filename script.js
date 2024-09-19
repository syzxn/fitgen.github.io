const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate-btn');
const bmiResultElement = document.getElementById('bmi-result');
const bmiCategoryElement = document.getElementById('bmi-category');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
});

calculateButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (weight && height) {
    const bmi = calculateBMI(weight, height);
    const bmiCategory = getBMICategory(bmi);

    bmiResultElement.textContent = bmi.toFixed(2);
    bmiCategoryElement.textContent = bmiCategory;
  } else {
    alert('Please enter valid weight and height values');
  }
});

function calculateBMI(weight, height) {
  return weight / (height ** 2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal weight';
  } else if (bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}