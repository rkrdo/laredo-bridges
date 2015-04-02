import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('cams', { path: '/' }, function() {
    this.route('cam', { path: '/cams/:cam_id' });
  });
});
