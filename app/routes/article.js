import Ember from 'ember';

export default Ember.Route.extend({
  // used do display correct article when clicked on
  model(params) {
    var info = params.article_title.split('~');
    console.log(info);
    return [this.store.peekRecord(info[0], info[1])];
  }
});
