import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('buzzfeed', function() {});
  this.route('featured', function() {});
  this.route('article', {path: 'article/:article_title'}, function() {
    this.route('comments');
  });
  this.route('othernews', {path: '/othernews'});
});

export default Router;
