export async function getExchangeRates() {
    var app_id = "e359b7178de94d29bb3fa8082052ca72"
    var url = "https://openexchangerates.org/api/latest.json?app_id=" + app_id    

    var promise = await fetch(url)
    var result = await promise.json()
    return result;
    // for (const e in result.rates) {
    //     // console.log("Key: " + e + " Value: " + result.rates[e]);

    // }
}