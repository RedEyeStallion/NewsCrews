import Ember from 'ember';

export default Ember.Route.extend({
  // used to display correct article information in lobby page when clicked on
  model(params) {
    // split passed in parameters into source and title (separated by ~)
    var info = params.article_title.split('~');
    return [this.store.peekRecord(info[0], info[1])];
  }
});
