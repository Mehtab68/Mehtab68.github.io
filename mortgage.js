const MortgageAmountInput = document.querySelector(".mortgage-amount");
const InterestRateInput = document.querySelector(".interest-rate");
const MortgageTenureInput = document.querySelector(".loan-tenure");

const MortgageEMI = document.querySelector(".mortgage-emi .value");
const TIP = document.querySelector(".total-mortgage .value");
const TA = document.querySelector(".total-Amount .value");

const calculateBtn = document.querySelector(".Calculate-button");

let MortgageAmount = parseFloat(MortgageAmountInput.value);
let InterestRate = parseFloat(InterestRateInput.value);
let MortgageTenure = parseFloat(MortgageTenureInput.value);

let interest = InterestRate / 12 / 100;

const calculateEMI = () => {
    let emi = MortgageAmount * interest * (Math.pow(1 + interest, MortgageTenure) / (Math.pow(1 + interest, MortgageTenure) - 1));
    return emi;
};

const updateData = (emi) => {
    MortgageEMI.innerHTML = Math.round(emi);

    let totalAmount = Math.round(MortgageTenure * emi);
    TA.innerHTML = totalAmount;

    let totalIP = Math.round(totalAmount - MortgageAmount);
    TIP.innerHTML = totalIP;
};

const init = () => {
    let emi = calculateEMI();
    updateData(emi);
}

calculateBtn.addEventListener("click", () => {
    MortgageAmount = parseFloat(MortgageAmountInput.value);
    InterestRate = parseFloat(InterestRateInput.value);
    MortgageTenure = parseFloat(MortgageTenureInput.value);

    interest = InterestRate / 12 / 100;

    let emi = calculateEMI();
    updateData(emi);
});

const refreshInputValues = () => {

    MortgageAmount = parseFloat(MortgageAmountInput.value);
    InterestRate = parseFloat(InterestRateInput.value);
    MortgageTenure = parseFloat(MortgageTenureInput.value);
    interest = InterestRate / 12 / 100;
}


calculateBtn.addEventListener("click", () =>{
    refreshInputValues();
    let emi = calculateEMI();
    updateData(emi);
});


init();
