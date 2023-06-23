const CurrencyEL_one = document.getElementById('currency-one');
const CurrencyEL_two = document.getElementById('currency-two');
const amountEL_one = document.getElementById('amount-one');
const amountEL_two = document.getElementById('amount-two');
const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
const CurrencyOne = CurrencyEL_one.value;
const CurrencyTwo = CurrencyEL_two.value;

fetch(`https://open.exchangerate-api.com/v6/latest/${CurrencyOne}`)
.then(res => res.json())
.then(data => {
// console.log(data);
const rate = data.rates[CurrencyTwo];

rateEL.innerText = `1 ${CurrencyOne} = ${rate} ${CurrencyTwo}`;

amountEL_two.value = (amountEL_one.value * rate).toFixed(2);
console.log(amountEL_two.value);

});

}

CurrencyEL_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
CurrencyEL_two.addEventListener('change', calculate);
amountEL_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = CurrencyEL_one.value;
    CurrencyEL_one.value = CurrencyEL_two.value;
    CurrencyEL_two.value = temp;
    calculate();
})

calculate();




