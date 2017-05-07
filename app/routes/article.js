import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    var info = params.article_title.split('&');
    return [this.store.peekRecord(info[0], info[1])];
  }
});
