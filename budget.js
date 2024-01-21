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
    budgetChart.data.datasets[0].data = [income, housing, utilities, groceries, entertainment, miscellaneous];
    
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
    },
  });
  
  // Initial update to calculate and display initial remaining budget
  updateChart();
  