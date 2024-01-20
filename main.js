// Calculator //

function calculator(){
    if (document.getElementById('selector').value == "loan") {

        
        document.getElementById("calculator").innerHTML +=    ` <h2> Loan Interest Calculator </h2>

        <label for="loanAmount">Loan Amount ($):</label>
        <input type="number" id="loanAmount" placeholder="Enter loan amount" required><br>
    
        <label for="interestRate">Annual Interest Rate (%):</label>
        <input type="number" id="interestRate" placeholder="Enter annual interest rate" required> <br>
    
        <label for="loanTerm">Loan Term (years):</label>
        <input type="number" id="loanTerm" placeholder="Enter loan term in years" required> <br>
    
        <button onclick="calculateInterest()">Calculate</button> `


      } else if (document.getElementById('selector').value == "car"){
        
    } else if (document.getElementById('selector').value == "mortgage"){
        
    } 
    else{
        
    }  
}

function calculateInterest(){
    var loanAmount = document.getElementById("loanAmount").value;
    var interestRate = document.getElementById("interestRate").value/100;
    var loanTerm = document.getElementById("loanTerm").value;

    var result = loanAmount * interestRate * loanTerm;

    document.getElementById("result").innerHTML =  ` <h1>Your Total Amount To Pay Back is ${result}$</h1> ` 
}