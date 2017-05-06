import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [this.store.peekRecord('buzzfeed', params.article_title)];
  }
});
