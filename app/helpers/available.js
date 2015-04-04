//import Ember from 'ember';
import availability from '../utils/availability';

// TODO use this shit once it works
//export default Ember.HTMLBars.makeBoundHelper(function(value, options) {
  //return availability(value);
//});
export default function(value) {
  return availability(value);
}
