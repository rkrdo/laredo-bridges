import {
  availableLanes
} from '../../../helpers/available-lanes';
import { module, test } from 'qunit';

module('AvailableLanesHelper');

test('returns Unavailable if value is null', function(assert) {
  var result = availableLanes(null);
  assert.equal(result, 'Unavailable');
});

test('returns the correct value', function(assert) {
  var lanes = availableLanes('3'),
    lane = availableLanes('1');
  assert.equal(lanes, '3 lanes');
  assert.equal(lane, '1 lane');
});
