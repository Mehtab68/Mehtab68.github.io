// Calculator //

function calculator(){

    document.getElementById("calculator").innerHTML = ""
    document.getElementById("result").innerHTML = ""

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

       document.getElementById("calculator").innerHTML += `<h2>Car Payment Calculator</h2>
            
        <label>Vehicule Price ($):</label>
        <input type="number" id="vehiculePrice" placeholder="Enter Vehicule Price" required><br>
    
        <label>Down Payment Amount ($):</label>
        <input type="number" id="downPayment" placeholder="Enter Down Payment Amount" required> <br>
    
        <label>Trade In Value($):</label>
        <input type="number" id="tradeValue" placeholder="Enter Trade In Value" required> <br>
    
        <label for="interestRate">Monthly Interest Rate (%):</label>
        <input type="number" id="intRate" id="monthlyInterestRate" placeholder="Enter monthly interest rate" required> <br>
    
        <label for="loanTerm">Loan Term (months):</label>
        <input type="number" id="loanTerm" placeholder="Enter loan term in months" required> <br>

        <button onclick="calculatePayments()">Calculate</button>`
        
    } else if (document.getElementById('selector').value == "mortgage"){
        
    } 
    else{
        
    }  
}

function calculateInterest(){
    var loanAmount = document.getElementById("loanAmount").value;
    var interestRate = document.getElementById("interestRate").value/100;
    var loanTerm = document.getElementById("loanTerm").value;

    var interestAmount = loanAmount * interestRate * loanTerm;
    var result = parseInt(interestAmount) + parseInt(loanAmount);

    document.getElementById("result").innerHTML =  ` <h1>Your Total Amount To Pay Back is ${result}$</h1> ` 
}


function calculatePayments(){
    var vehiculePrice = document.getElementById('vehiculePrice').value,
        loanTerm = document.getElementById('loanTerm').value,
        intRate = document.getElementById('intRate').value,
        downPayment = document.getElementById('downPayment').value,
        tradeValue = document.getElementById('tradeValue').value,
        amount = parseInt(vehiculePrice),
        months = parseInt(loanTerm),
        down  = parseInt(downPayment),
        trade =  parseInt(tradeValue),
        totalDown  = down + trade
        annInterest = parseFloat(intRate),
        monInt = annInterest / 1200;
  
        if(!amount){
          alert('Please add a loan amount');
          return;
        }
  
        if(!months){
          months = 60;
          loanTerm = document.getElementById('loanTerm').value = '60';
        }
  
        if(!downPayment){
          down = 0;
          downPayment = document.getElementById('downPayment').value = '0';
        }
  
        if(!trade){
          trade = 0;
          tradeValue = document.getElementById('tradeValue').value = '0';
        }
  
        if(!annInterest){
          annInterest = 3.25;
          intRate = document.getElementById('intRate').value = '3.25';
        }
  
  
        var result = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (totalDown || 0))).toFixed(2);
  
  
        document.getElementById("result").innerHTML = ` Your Monthly Loan Payment is ${result}`;
  
  
  }