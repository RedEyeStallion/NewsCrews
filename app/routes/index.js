import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    // When you nav to main page, redirects to buzzfeed page
    this.transitionTo('buzzfeed');
  }
});
