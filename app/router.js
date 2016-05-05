import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('problem');
  this.route('theory');
  this.route('build');
  this.route('other');
});

export default Router;
