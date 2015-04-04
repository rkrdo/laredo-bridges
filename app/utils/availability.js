import Ember from 'ember';

export default function availability(value, extra_words) {
  if(Ember.isBlank(value)) {
    return 'Unavailable';
  }
  return Ember.isPresent(extra_words) ? value + extra_words : value;
}
