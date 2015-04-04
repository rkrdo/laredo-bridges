import Ember from 'ember';
import availability from '../utils/availability';

export function available(value) {
  return availability(value);
}

export default Ember.HTMLBars.makeBoundHelper(available);
