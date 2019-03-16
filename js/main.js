import { convert, getExchangeRates } from "./api.js"

$(document).ready(() => {

    loadDropDown();

    $(".buy-sell").on("change", function (radio) {
        if (radio.target.value === "buy") {
            $("#buySellText").text("och betala med")
        } else if (radio.target.value === "sell") {
            $("#buySellText").text("och få betalat i")
        }
    })

    $("#getExchangeBtn").on("click", function () {

        setAmount();
    })
})

async function setAmount() {
    var radioValue = $("input[name=buySell]:checked").val()
    var from = $("#currencyOne").val();
    var to = $("#currencyTwo").val();
    var amount = $("#amount").val();

    var result = await convert(from, to, amount);


    if (radioValue === "buy") {

    } else if (radioValue === "sell") {

    }
}

async function loadDropDown() {

    var results = await getExchangeRates();
    for (const rate in results.rates) {
        var opt = document.createElement("option");
        opt.value = rate;
        opt.innerHTML = rate;
        $("#currencyOne").append(opt);

        var opt2 = document.createElement("option");
        opt2.value = rate;
        opt2.innerHTML = rate;
        $("#currencyTwo").append(opt2);
    }

}