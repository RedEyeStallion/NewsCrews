import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    upVote() {
      var article = this.get('content')[0];
      var curr_upVotes = article.get('upVotes');
      article.set('upVotes', curr_upVotes + 1);
    }
  }
});
