
  const displayNumber = document.getElementById('displayNumber');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  let number = 0;

  function updateDisplay() {
    displayNumber.textContent = number;
  }

  incrementButton.addEventListener('click', () => {
    number++;
    updateDisplay();
  });

  decrementButton.addEventListener('click', () => {
    if (number > 0) {
      number--;
      updateDisplay();
    }
  });

  updateDisplay();
