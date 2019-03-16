var app_id = "e359b7178de94d29bb3fa8082052ca72"

export async function convert(from, to, amount) {
    //var url = "https://openexchangerates.org/api/convert/" + amount +  "/" + from + "/" + to + "?app_id=" + app_id
    var url ="https://api.exchangeratesapi.io/latest?base=" + from + "&" + "symbols=" + to;
    var promise = await fetch(url)
    var result = await promise.json()
    return result;

}

export async function getExchangeRates() {
    //var url = "https://openexchangerates.org/api/latest.json?app_id=" + app_id    
    var url = "https://api.exchangeratesapi.io/latest";
    var promise = await fetch(url)
    var result = await promise.json()
    return result;

}