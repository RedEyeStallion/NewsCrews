import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('buzzfeed', function() {});
  this.route('featured', function() {});
});

export default Router;
