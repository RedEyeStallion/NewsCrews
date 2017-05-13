import Ember from 'ember';
var $ = window.jQuery;
let recordArray = [];
let loaded = false;

export default Ember.Route.extend({
  beforeModel: function() {
    let Dstore = this.store;
    if (!loaded) {
      return new Ember.RSVP.Promise(function(resolve) {
        $.get("https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=538efd35759443348adfb06e7bcd1689").then((data) => {
          console.log(data);
          data.articles.forEach(function(article, i) {
            let record = Dstore.createRecord('science', {
              "id": article.title,
              "name": 'science~' + article.title,
              "author": article.author,
              "title": article.title,
              "description": article.description,
              "url": article.url,
              "urlToImage": article.urlToImage,
              "publishedAt": article.publishedAt,
              "upVotes": 0,
              "totalMessages": 0,
              "messages": [],
              "mTimes": []
            });
            console.log(record);
            recordArray[i] = record;
          });
          loaded = true;
          resolve();
        });
      });
    }
  },

  model() {
    return recordArray;
  },

  setupController: function(controller, model) {
    console.log(model.msg); // "Hold Your Horses"
  },

  actions: {
    willTransition() {
      //this.store.unloadAll('buzzfeed');
    }
  }
});
