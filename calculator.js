// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");
const loanAmount = document.querySelector("#loan-amount");
const loanYears = document.querySelector("#loan-years");
const loanRate = document.querySelector("#loan-rate");
const calculatedMonthlyPayment = document.querySelector("#calc-monthly-payment");

/** Get form values and return as `{amount, years, rate}`.
 *
 * Example output: `{"amount": 10000, "years": 10, "rate": 4.5}`.
 *
 * */

function getFormValues() {
  let formValues = {
    amount: parseInt(loanAmount.value),
    years: parseInt(loanYears.value),
    rate: parseFloat(loanRate.value)
  }

  return formValues;
}


/** Calculate monthly payment and return exact amount. */

function calcMonthlyPayment(amount, years, rate) {
  let monthsInYear = 12;
  let interestRate = rate / monthsInYear / 100; // 100 converts percent to decimal
  let totalPayments = years * monthsInYear;
  let monthlyPaymet = (
    (amount * interestRate)/
    (1 - Math.pow((1 + interestRate), -totalPayments))
  );

  return monthlyPaymet;
}


/** Get form values, calculate, convert to 2-decimal places, and update UI. */

function getFormValuesAndDisplayResults() {
  let formValues = getFormValues();
  console.log("get form values:", formValues);

  let monthlyPayment = calcMonthlyPayment(formValues.amount, formValues.years, formValues.rate);
  console.log("exact calculated monthly paymet: ", monthlyPayment);

  let roundedMonthlyPayment = monthlyPayment.toFixed(2);
  console.log("rounded monthly payment: ", roundedMonthlyPayment);

  calculatedMonthlyPayment.innerText = `$${roundedMonthlyPayment}`;
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  loanAmount.value = 10000;
  loanYears.value = 10;
  loanRate.value = 4.5;
  getFormValuesAndDisplayResults();
}


/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
