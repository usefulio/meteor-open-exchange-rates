OpenExchangeRates = function(apiKey, useHttps){
	this.apiKey = apiKey;
	this.baseUrl = (useHttps === true ? 'https' : 'http' ) + '://openexchangerates.org/api/';
};

OpenExchangeRates.prototype = {
	constructor: OpenExchangeRates
	, latest: function(cb){
		this._load('latest.json', null, cb);
	}
	, historical: function(date, cb){
		this._load('historical/'+date+'.json', null, cb);
	}
	, currencies: function(cb){
		this._load('currencies.json', null, cb);
	}
	, timeSeries: function(start, end, options, cb){
		var params = options || {};
		params.start = start;
		params.end = end;
		this._load('time-series.json', params, cb);
	}
	, _load: function(path, options, cb){
		var url = this.baseUrl + path;
		var params = options || {};
		params.app_id = this.apiKey;
		if(Meteor.isServer){
			// HTTP package implementation
			HTTP.get(url, { params: params }, function(err, result){
				if(err){
					cb(err)
				}else{
					cb(null, result.data);
				}
			});
		}else{
			// jQuery JSONP implementation
			$.ajax({
				url: url
				, data: params
				, dataType: 'jsonp'
				, success: function(result) {
					// Rates are in `result.rates`
					// Base currency (USD) is `result.base`
					// UNIX Timestamp when rates were collected is in `json.timestamp`
					cb(null, result);
				}
				, error: function(jqXHR, textStatus, errorThrown){
					cb({ error: textStatus, reason: errorThrown });
				}
			});
		}
	}
}