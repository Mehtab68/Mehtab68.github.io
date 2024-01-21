var chart;  // Declare the chart variable outside of the function

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to input elements
    document.getElementById('initialAmount').addEventListener('input', calculateInflation);
    document.getElementById('inflationRate').addEventListener('input', calculateInflation);
    document.getElementById('years').addEventListener('input', calculateInflation);

    // Initial calculation
    calculateInflation();
});

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
