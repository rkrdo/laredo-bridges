import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import availableHelper from './helpers/available';
import availableLanesHelper from './helpers/available-lanes';
import availableDelayHelper from './helpers/available-delay';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Handlebars.registerBoundHelper('available', availableHelper); // TODO convert to HTMLBars
Ember.Handlebars.registerBoundHelper('available-lanes', availableLanesHelper); // TODO convert to HTMLBars
Ember.Handlebars.registerBoundHelper('available-delay', availableDelayHelper); // TODO convert to HTMLBars

export default App;
