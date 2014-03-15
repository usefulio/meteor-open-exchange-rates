# OpenExchangeRate.org API helper for use in Meteor clients and servers

Exposes the same api as described here: https://openexchangerates.org/quick-start

This package uses the HTTP package on the server and jQuery's jsonp implementation on the client.

In both cases, the results passed to your callback are the raw json results from the API so you can do with them what you want.

If you get an error, it will always have a `error` and a `reason` property. Both are descriptive, but on the client `error` will not be a Meteor error code, it will be a jqXHR error reason. If that client-side error is caused by an HTTP error, then `reason` will contain the textual portion of the HTTP error status as described in the jQuery api.

## Install

```
mrt add open-exchange-rates
```

## Examples

```
var rates = new OpenExchangeRates('apiKey');

rates.latest(function(err, result){
	...
});

rates.historical('YYYY-MM-DD', function(err, result){
	...
});

rates.currencies(function(err, result){
	...
});

rates.timeSeries('YYYY-MM-DD' /*start*/, 'YYYY-MM-DD' /* end */, { base: 'GBP', symbols: ['USD', 'JPY', 'etc' ], prettyprint: true} /* optional options */, function(err, result){
	...
});
```

## Sample Response for .latest()

```
{
    "disclaimer": "Exchange rates are provided for informational purposes only, and do not constitute financial advice of any kind. Although every attempt is made to ensure quality, NO guarantees are given whatsoever of accuracy, validity, availability, or fitness for any purpose - please use at your own risk. All usage is subject to your acceptance of the Terms and Conditions of Service, available at: https://openexchangerates.org/terms/",
    "license": "Data sourced from various providers with public-facing APIs; copyright may apply; resale is prohibited; no warranties given of any kind. Bitcoin data provided by http://coindesk.com. All usage is subject to your acceptance of the License Agreement available at: https://openexchangerates.org/license/",
    "timestamp": 1394863261,
    "base": "USD",
    "rates": {
        "AED": 3.67298,
        "AFN": 56.93,
        "ALL": 101.111709,
        "AMD": 417.346001,
        "ANG": 1.78906,
        "AOA": 97.593676,
        "ARS": 7.892644,
        "AUD": 1.107224,
        "AWG": 1.7899,
        "AZN": 0.784133,
        "BAM": 1.407426,
        "BBD": 2,
        "BDT": 77.71251,
        "BGN": 1.408061,
        "BHD": 0.376978,
        "BIF": 1555.625,
        "BMD": 1,
        "BND": 1.265242,
        "BOB": 6.912228,
        "BRL": 2.352489,
        "BSD": 1,
        "BTC": 0.0015873142,
        "BTN": 61.204875,
        "BWP": 8.854746,
        "BYR": 9849.218333,
        "BZD": 1.984627,
        "CAD": 1.110105,
        "CDF": 922.131833,
        "CHF": 0.872703,
        "CLF": 0.0243,
        "CLP": 572.058795,
        "CNY": 6.148358,
        "COP": 2044.388341,
        "CRC": 555.047994,
        "CUP": 0.999625,
        "CVE": 78.56839,
        "CZK": 19.67286,
        "DJF": 178.517,
        "DKK": 5.366697,
        "DOP": 43.20723,
        "DZD": 77.24932,
        "EEK": 11.612,
        "EGP": 6.960663,
        "ERN": 15.002825,
        "ETB": 19.27004,
        "EUR": 0.718828,
        "FJD": 1.861611,
        "FKP": 0.600656,
        "GBP": 0.600656,
        "GEL": 1.74182,
        "GHS": 2.553751,
        "GIP": 0.600656,
        "GMD": 38.10253,
        "GNF": 7033.221667,
        "GTQ": 7.726616,
        "GYD": 203.801666,
        "HKD": 7.766072,
        "HNL": 19.31575,
        "HRK": 5.504976,
        "HTG": 43.84117,
        "HUF": 224.588201,
        "IDR": 11360.466667,
        "ILS": 3.464192,
        "INR": 61.25994,
        "IQD": 1166.133316,
        "IRR": 24925.333333,
        "ISK": 112.266,
        "JEP": 0.600656,
        "JMD": 108.7435,
        "JOD": 0.70663,
        "JPY": 101.3986,
        "KES": 86.51387,
        "KGS": 53.791675,
        "KHR": 4005.356867,
        "KMF": 353.933614,
        "KPW": 900,
        "KRW": 1072.06667,
        "KWD": 0.281528,
        "KYD": 0.826936,
        "KZT": 182.719301,
        "LAK": 8040.266602,
        "LBP": 1506.72,
        "LKR": 130.620299,
        "LRD": 79.91375,
        "LSL": 10.73865,
        "LTL": 2.482866,
        "LVL": 0.507235,
        "LYD": 1.244814,
        "MAD": 8.092971,
        "MDL": 13.41574,
        "MGA": 2350.971667,
        "MKD": 44.38368,
        "MMK": 966.5495,
        "MNT": 1758,
        "MOP": 8.000596,
        "MRO": 291.4446,
        "MTL": 0.683738,
        "MUR": 30.08459,
        "MVR": 15.41182,
        "MWK": 420.1612,
        "MXN": 13.22135,
        "MYR": 3.278195,
        "MZN": 31.75,
        "NAD": 10.73853,
        "NGN": 164.772599,
        "NIO": 25.62005,
        "NOK": 5.972394,
        "NPR": 98.14428,
        "NZD": 1.171337,
        "OMR": 0.384998,
        "PAB": 1,
        "PEN": 2.804915,
        "PGK": 2.639833,
        "PHP": 44.66433,
        "PKR": 99.27955,
        "PLN": 3.040806,
        "PYG": 4424.074974,
        "QAR": 3.641763,
        "RON": 3.242293,
        "RSD": 83.385201,
        "RUB": 36.60951,
        "RWF": 682.0267,
        "SAR": 3.750307,
        "SBD": 7.271503,
        "SCR": 12.17268,
        "SDG": 5.698308,
        "SEK": 6.387075,
        "SGD": 1.265461,
        "SHP": 0.600656,
        "SLL": 4334.166667,
        "SOS": 1019.04655,
        "SRD": 3.2875,
        "STD": 17596.1922,
        "SVC": 8.751381,
        "SYP": 143.1259,
        "SZL": 10.71665,
        "THB": 32.28021,
        "TJS": 4.800175,
        "TMT": 2.8516,
        "TND": 1.574619,
        "TOP": 1.856957,
        "TRY": 2.216843,
        "TTD": 6.381872,
        "TWD": 30.33895,
        "TZS": 1634.031667,
        "UAH": 9.662835,
        "UGX": 2524.735,
        "USD": 1,
        "UYU": 22.21227,
        "UZS": 2241.106637,
        "VEF": 6.293275,
        "VND": 21112.533333,
        "VUV": 95.855,
        "WST": 2.326174,
        "XAF": 471.954917,
        "XAG": 0.04673677,
        "XAU": 0.00071907,
        "XCD": 2.70102,
        "XDR": 0.644429,
        "XOF": 472.02742,
        "XPF": 85.95423,
        "YER": 214.9835,
        "ZAR": 10.69423,
        "ZMK": 5253.075255,
        "ZMW": 6.048648,
        "ZWL": 322.355006
    }
}
```