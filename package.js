Package.describe({
  name: 'ianng:leaflet-control-geocoder',
  summary: 'perliedman:leaflet-control-geocoder porting to meteor',
  version: '1.0.0',
  git: 'https://github.com/ianng/leaflet-control-geocoder'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('bevanhunt:leaflet@0.3.18', 'client');
  api.use('ianng:leaflet-routing-machine@1.0.1', 'client');
  api.addFiles('ianng:Control.Geocoder.js', 'client');
  api.addFiles('ianng:Control.Geocoder.css', 'client');
});


Package.onTest(function(api) {

  api.use('tinytest');
});
