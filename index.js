/* jshint node: true */
'use strict';

module.exports = {
  description: 'pull leaflet-measure assets using bower',
  name: 'ember-leaflet-measure',
  included: function(app) {
   this._super.included(app);
   ['cancel_@2X.png','cancel.png','check_@2X.png','check.png','focus_@2X.png',
    'focus.png','rulers_@2X.png','rulers.png','start_@2X.png','start.png','trash_@2X.png','trash.png'].forEach(function(file){
     app.import(app.bowerDirectory + '/leaflet-measure/dist/images/' + file, { destDir: '/assets/images' });
   });
   app.import(app.bowerDirectory + '/leaflet-measure/dist/leaflet-measure.min.js');
   app.import(app.bowerDirectory + '/leaflet-measure/dist/leaflet-measure.css');
 }
};
