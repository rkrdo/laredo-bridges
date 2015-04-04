//import Ember from 'ember';
import availability from '../utils/availability';

export default function(value) {
  var lanes = (value === "1") ? ' lane' : ' lanes';
  return availability(value, lanes);
}

//export default Ember.Handlebars.makeBoundHelper(availableLanes);
