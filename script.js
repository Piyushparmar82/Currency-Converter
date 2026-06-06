function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    const rates = {
        USD: 1,
        INR: 83,
        EUR: 0.92,
        GBP: 0.79
    };

    let amountInUSD = amount / rates[from];
    let convertedAmount = amountInUSD * rates[to];

    document.getElementById("result").innerHTML =
        `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}