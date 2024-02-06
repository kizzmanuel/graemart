
const budgetInput = document.getElementById('budgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
const budgetDisplay = document.getElementById('budgetDisplay');
const itemInput = document.getElementById('itemInput');
const costInput = document.getElementById('costInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');
const budgetExceededMessage = document.getElementById('budgetExceededMessage');

let budget = 0;
let totalCost = 0;

setBudgetBtn.addEventListener('click', () => {
    budget = parseInt(budgetInput.value);
    budgetDisplay.textContent = `Your Budget: ₦${budget}`;
    budgetInput.value = '';
    budgetExceededMessage.textContent = ''; // Clear budget exceeded message
});

addItemBtn.addEventListener('click', () => {
    const itemName = itemInput.value;
    const itemCost = parseInt(costInput.value);

    if (!itemName || isNaN(itemCost)) {
        alert('Please enter valid item and cost.');
        return;
    }

    if (totalCost + itemCost > budget) {
        budgetExceededMessage.textContent = 'Budget Exceeded!';
        return;
    }

    totalCost += itemCost;
    itemsList.innerHTML += `<li>${itemName}: ₦${itemCost}</li>`;

    itemInput.value = '';
    costInput.value = '';
    budgetExceededMessage.textContent = ''; // Clear budget exceeded message
});

// Automatically set the budget and update the display
function autoSetBudget() {
  budget = parseInt(prompt('Please enter your budget:'));
  budgetDisplay.textContent = `Your Budget: ₦${budget}`;
}

// Call the autoSetBudget function when the page loads
autoSetBudget();
