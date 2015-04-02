import Ember from 'ember';
import ENV from 'laredo-cams/config/environment';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON(ENV.APP_URL + '/laredo');
  }
});
