var chart;  // Declare the chart variable outside of the function

function calculate() {
    var calculationType = document.getElementById('calculationType').value;

    switch (calculationType) {
        case 'inflation':
            calculateInflation();
            break;
        case 'loan':
            calculateLoanPayment();
            break;
        case 'car':
            calculateCarPayment();
            break;
        case 'mortgage':
            calculateMortgage();
            break;
    }
}


function calculateInflation() {
    var initialAmount = parseFloat(document.getElementById('initialAmount').value);
    var inflationRate = parseFloat(document.getElementById('inflationRate').value);
    var years = parseInt(document.getElementById('years').value);

    var result = initialAmount * Math.pow((1 + inflationRate/100), years);

    document.getElementById('result').innerHTML = 'The final amount after inflation is: ' + result.toFixed(2);

    // Create an array with the values for each year
    var data = [];
    for (var i = 0; i <= years; i++) {
        data.push(initialAmount * Math.pow((1 + inflationRate/100), i));
    }

    // Remove the old chart if it exists
    if (chart) {
        chart.destroy();
    }

    // Create the chart
    var ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: years + 1}, (_, i) => i),  // Array from 0 to 'years'
            datasets: [{
                label: 'Amount after inflation',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
}



// function calculateLoanPayment() {
//     var loanAmount = parseFloat(document.getElementById('loanAmount').value);
//     var annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
//     var loanPeriodInYears = parseInt(document.getElementById('loanPeriodInYears').value);

//     var monthlyInterestRate = annualInterestRate / 100 / 12;
//     var numberOfPayments = loanPeriodInYears * 12;

//     var loanPayment = (monthlyInterestRate * loanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

//     document.getElementById('result').innerHTML = 'The monthly loan payment is: ' + loanPayment.toFixed(2);

//     // Create an array with the remaining loan balance for each month
//     var data = [];
//     var remainingBalance = loanAmount;
//     for (var i = 0; i < numberOfPayments; i++) {
//         remainingBalance = remainingBalance * (1 + monthlyInterestRate) - loanPayment;
//         data.push(remainingBalance);
//     }

//     // Remove the old chart if it exists
//     if (chart) {
//         chart.destroy();
//     }

//     // Create the chart
//     var ctx = document.getElementById('myChart').getContext('2d');
//     chart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: Array.from({length: numberOfPayments}, (_, i) => i + 1),  // Array from 1 to 'numberOfPayments'
//             datasets: [{
//                 label: 'Remaining loan balance',
//                 data: data,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }