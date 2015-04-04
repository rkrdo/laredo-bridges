import availability from '../../../utils/availability';
import { module, test } from 'qunit';

module('availability');

test('returns Unavailable if value is null', function(assert) {
  var result = availability(null, false);
  assert.equal(result, 'Unavailable');
});

test('returns the value with no extra word', function(assert) {
  var result = availability('3');
  assert.equal(result, '3');
});

test('returns the value and the extra word', function(assert) {
  var result = availability('1', ' lane');
  assert.equal(result, '1 lane');
});
