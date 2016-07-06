/* jshint node: true */
'use strict';

module.exports = {
  description: 'pull leaflet-measure assets using bower',
  name: 'ember-leaflet-measure',
  included: function(app) {
   app.import(app.bowerDirectory + '/leaflet-measure/dist/leaflet-measure.min.js');
   app.import(app.bowerDirectory + '/leaflet-measure/dist/leaflet-measure.css');
  }
};
