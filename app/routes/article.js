import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    console.log("hello", this.store.peekAll('article'));

    return [params];
  }
});
