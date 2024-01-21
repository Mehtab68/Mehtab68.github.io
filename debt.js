var debtChart; // Declare the chart variable outside of the function

function calculateDebtRepayment() {
    var initialDebt = parseFloat(document.getElementById('initialDebt').value);
    var annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    var monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value);

    var data = [];
    var monthsToRepay = 0;

    for (var month = 1; initialDebt > 0; month++) {
        var interest = initialDebt * (annualInterestRate / 100 / 12);
        initialDebt = initialDebt + interest - monthlyPayment;

        // Ensure debt doesn't go negative
        if (initialDebt < 0) {
            initialDebt = 0;
        }

        data.push({
            month: month,
            remainingDebt: initialDebt
        });

        // Check if debt is fully repaid
        if (initialDebt === 0 && monthsToRepay === 0) {
            monthsToRepay = month;
        }
    }

    // Remove the old chart if it exists
    if (debtChart) {
        debtChart.destroy();
    }

    // Create the chart
    var ctx = document.getElementById('debtChart').getContext('2d');
    debtChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(entry => entry.month),
            datasets: [{
                label: 'Remaining Debt',
                data: data.map(entry => entry.remainingDebt),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Display the message
    var message = document.getElementById('repaymentMessage');
    if (monthsToRepay > 0) {
        var years = Math.floor(monthsToRepay / 12);
        var remainingMonths = monthsToRepay % 12;

        var yearsMessage = years > 0 ? years + ' year' + (years > 1 ? 's' : '') : '';
        var monthsMessage = remainingMonths > 0 ? remainingMonths + ' month' + (remainingMonths > 1 ? 's' : '') : '';

        var separator = (yearsMessage && monthsMessage) ? ' and ' : '';
        var messageText = 'Debt will be fully repaid in ' + monthsToRepay + ' month' + (monthsToRepay > 1 ? 's' : '') +
            ' (' + yearsMessage + separator + monthsMessage + ').';

        message.innerHTML = messageText;
    } else {
        message.innerHTML = 'Monthly payments are not enough to repay the debt.';
    }
}

// Attach the calculateDebtRepayment function to a button click event
document.getElementById('calculateButton').addEventListener('click', calculateDebtRepayment);
