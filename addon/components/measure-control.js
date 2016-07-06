import Ember from 'ember';
import L from 'ember-leaflet';
import BaseLayer from 'ember-leaflet/components/base-layer';

const {get} = Ember;

export default BaseLayer.extend({
  leafletOptions: [
    'position'
  ],

  createLayer(){
		return new L.Control.Measure(get('options'));
	}
});
