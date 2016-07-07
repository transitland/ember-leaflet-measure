/*jshint node:true*/
module.exports = {
  description: 'leaflet measure',

  normalizeEntityName: function() {

  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('leaflet-measure', 'ljagis/leaflet-measure');
  }
};
