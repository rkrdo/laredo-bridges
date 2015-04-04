import {
  available
} from '../../../helpers/available';
import { module, test } from 'qunit';

module('AvailableHelper');

test('returns Unavailable if value is null', function(assert) {
  var result = available(null);
  assert.equal(result, 'Unavailable');
});

test('returns the correct value', function(assert) {
  var result = available('3');
  assert.equal(result, '3');
});
