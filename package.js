Package.describe({
  summary: 'Helper for pulling data from the openexchangerates.org api'
});

Package.on_use(function (api) {
  api.use('jquery', ['client']);
  api.use('http', ['server']);

  api.add_files('openexchangerates.js', ['server', 'client']);
  
  api.export('OpenExchangeRates');
});
