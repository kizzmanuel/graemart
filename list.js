const addMoreLink = document.getElementById('addMoreLink');
    const contentContainer = document.getElementById('contentContainer');

    addMoreLink.addEventListener('click', () => {
      const newContent = `
        <div class="d-flex gap-2">
          <input type="text" class="form-control" id="searchInput" placeholder="Rice 50kg" style="width: 300px;"> 
          <div class="number-container" style="border: 1px solid #333;">
            <button class="button" id="decrement">-</button>
            <div class="number" id="displayNumber">0</div>
            <button class="button" id="increment">+</button>
          </div>  
          <button style="border: none; background-color: #fff; font-weight: 700; font-size: 26px;" id="addItemButton"></button>
        </div>
        <div id="dropdown" class="dropdown-content"></div>
      `;

      contentContainer.insertAdjacentHTML('beforeend', newContent);
    });

///////code for + and - button //////////////////
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



    /////////////////////// the make a list ///////
 