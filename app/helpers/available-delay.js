//import Ember from 'ember';
import availability from '../utils/availability';

//export default Ember.HTMLBars.makeBoundHelper(availableDelay);

export default function(value) {
  if (value === "0") { return 'No Delay' }
  return availability(value, false);
}
