var chart;  // Declare the chart variable outside of the function

function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var compoundingFrequency = parseInt(document.getElementById('compoundingFrequency').value);
    var years = parseInt(document.getElementById('years').value);

    // Calculate compound interest using the formula: A = P(1 + r/n)^(nt)
    var result = principal * Math.pow(1 + (interestRate / (compoundingFrequency * 100)), compoundingFrequency * years);

    document.getElementById('result').innerHTML = 'The final amount after compound interest is: ' + result.toFixed(2);

    // Create an array with the values for each year
    var data = [];
    for (var i = 0; i <= years; i++) {
        data.push(principal * Math.pow(1 + (interestRate / (compoundingFrequency * 100)), compoundingFrequency * i));
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
            labels: Array.from({ length: years + 1 }, (_, i) => i),  // Array from 0 to 'years'
            datasets: [{
                label: 'Amount after compound interest',
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
