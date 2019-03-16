import {getExchangeRates} from "./api.js"

// var app_id = "e359b7178de94d29bb3fa8082052ca72"
// var url = "https://openexchangerates.org/api/latest.json?app_id=" + app_id

// async function getData() {
//     var promise = await fetch(url)
//     var result = await promise.json()
//     for (const e in result.rates) {
//         console.log("Key: " + e + " Value: " + result.rates[e]);
//     }
// }

// getData();

//test();

$(document).ready(()=>{
    loadDropDown();

    $(".buy-sell").on("change", function(radio){
        if(radio.target.value === "buy") {
            $("#buySellText").text("och betala med")
        } else if(radio.target.value === "sell") {
            $("#buySellText").text("och få betalat i")
        }
    })

    $("#getExchangeBtn").on("click", function(){

        var results = getExchangeRates();
        
    })
})

async function loadDropDown() {

    var results = await getExchangeRates();
    for(const rate in results.rates) {
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