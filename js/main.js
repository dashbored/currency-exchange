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

    var result = await convert(from, to);


    if (radioValue === "buy") {
        $("#result").text("You will have to pay " + Math.round(Object.entries(result.rates)[0][1] * amount*100)/100 + " " + Object.entries(result.rates)[0][0])
    } else if (radioValue === "sell") {
        $("#result").text("You will get " + Math.round(Object.entries(result.rates)[0][1] * amount*100)/100 + " " + Object.entries(result.rates)[0][0])
    }
}

async function loadDropDown() {

    var timeout = JSON.parse(localStorage.getItem("time"))
    if (timeout != null) {
        if (((Date.now() - Date.parse(timeout.toString())) >= (3.6 * 10**6))) {
            timeout = new Date();
            localStorage.removeItem("results");
            localStorage.setItem("time", JSON.stringify(timeout));
        }
    } else {
        timeout = new Date();
        localStorage.setItem("time", JSON.stringify(timeout));
    }

    var results = JSON.parse(localStorage.getItem("results"));

    if (results == null) {
        results = await getExchangeRates();
        localStorage.setItem("results", JSON.stringify(results));
    }

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