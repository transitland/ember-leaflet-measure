//import Ember from 'ember';
import LayerControl from 'ember-leaflet/components/base-layer';

const {get} = Ember;

export default BaseLayer.extend({
  leafletOptions: [
    'position'
  ],

  createLayer(){
		return new L.Control.Measure(this.get('options'));
	}
});
