// Function to update the chart based on user input
function updateChart() {
    // Get user input values
    const income = parseFloat(document.getElementById('income').value) || 0;
    const housing = -Math.abs(parseFloat(document.getElementById('housing').value)) || 0;
    const utilities = -Math.abs(parseFloat(document.getElementById('utilities').value)) || 0;
    const groceries = -Math.abs(parseFloat(document.getElementById('groceries').value)) || 0;
    const entertainment = -Math.abs(parseFloat(document.getElementById('entertainment').value)) || 0;
    const miscellaneous = -Math.abs(parseFloat(document.getElementById('miscellaneous').value)) || 0;
    const messageElement = document.getElementById('message');
  
    // Update the chart data
    const dataValues = [income, housing, utilities, groceries, entertainment, miscellaneous];
    const percentages = dataValues.map(value => ((value / income) * 100).toFixed(2));
  
    budgetChart.data.datasets[0].data = dataValues;
    budgetChart.data.datasets[0].labels = percentages;
    budgetChart.data.datasets[0].subLabels = dataValues.map(value => `$${value.toFixed(2)}`);
  
    // Calculate the total income and total expenses
    const totalIncome = income;
    const totalExpenses = Math.abs(housing) + Math.abs(utilities) + Math.abs(groceries) + Math.abs(entertainment) + Math.abs(miscellaneous);
  
    // Calculate the remaining budget
    const remainingBudget = totalIncome - totalExpenses;
  
    // Display message based on the remaining budget
    if (remainingBudget < 0) {
      messageElement.innerHTML = `You are in debt. Consider cutting your spending! Remaining Budget: <span class="negative">$${remainingBudget.toFixed(2)}</span>`;
    } else {
      messageElement.innerHTML = `Congratulations! You have a positive remaining budget of <span class="positive">$${remainingBudget.toFixed(2)}</span>.`;
    }
  
    // Update the chart
    budgetChart.update();
  }
  
  // Sample budget data
  const budgetData = {
    labels: ['Income', 'Housing', 'Utilities', 'Groceries', 'Entertainment', 'Miscellaneous'],
    datasets: [{
      label: 'Monthly Budget',
      data: [3000, -1000, -200, -300, -100, -50], // Default values
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
      labels: ['0%', '0%', '0%', '0%', '0%', '0%'],
    }],
  };
  
  // Create a doughnut chart
  const ctx = document.getElementById('budgetChart').getContext('2d');
  const budgetChart = new Chart(ctx, {
    type: 'doughnut',
    data: budgetData,
    options: {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Monthly Budget Overview',
      },
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const value = dataset.data[tooltipItem.index];
            const label = dataset.labels[tooltipItem.index];
            const subLabel = dataset.subLabels[tooltipItem.index];
            return `${label}%: $${value.toFixed(2)} (${subLabel} of Income)`;
          },
        },
      },
    },
  });
  
  // Budgeting tips
  const budgetTips = [
    ' Create a monthly budget to track your expenses.',
    ' Limit unnecessary expenses to save more money.',
    ' Consider using cash instead of cards to control spending.',
    ' Set financial goals to stay motivated.',
    ' Review your budget regularly and make adjustments as needed.',
    ' Follow the 50/30/20 rule: Allocate 50% to needs, 30% to wants, and 20% to savings.',
    ' Automate your savings by setting up automatic transfers to a separate account.',
    ' Shop smart by comparing prices and looking for discounts or coupons.',
    ' Build an emergency fund to cover unexpected expenses.',
    ' Track your spending to identify areas where you can cut costs.',
    ' Consider DIY options for things you can do yourself instead of paying for services.',
    ' Avoid impulse purchases by creating a shopping list and sticking to it.',
    ' Save for big purchases instead of relying on credit.',
    ' Plan your meals and groceries to minimize food waste and save money.',
  ];
  
  // Function to display a random budgeting tip without repetition
  function displayRandomTip() {
    const tipElement = document.getElementById('budgetTip');
  
    // Shuffle the tips array to ensure randomness
    for (let i = budgetTips.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [budgetTips[i], budgetTips[j]] = [budgetTips[j], budgetTips[i]];
    }
  
    // Display the first tip and move it to the end for the next iteration
    const currentTip = budgetTips.pop();
    budgetTips.unshift(currentTip);
  
    tipElement.textContent = currentTip;
  }
  
  // Initial update to calculate and display initial remaining budget
  updateChart();
  
  // Display a random budgeting tip
  displayRandomTip();
  
  // Automatically update chart on input change
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      updateChart();
      displayRandomTip();
    });
  });
  