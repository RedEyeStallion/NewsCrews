import Ember from 'ember';
var $ = window.jQuery;
// array for storing articles sent from api
let recordArray = [];
// initially, set loaded to false. Later this will be set to true to avoid loading duplicate articles.
let loaded = false;

export default Ember.Route.extend({
  beforeModel: function() {
    let Dstore = this.store;
    if (!loaded) {
      return new Ember.RSVP.Promise(function(resolve) {
        // Get relevant articles from source using api key
        $.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=538efd35759443348adfb06e7bcd1689").then((data) => {
          data.articles.forEach(function(article, i) {
            // create new record to be added to array of articles
            let record = Dstore.createRecord('buzzfeed', {
              "id": article.title,
              "name": 'buzzfeed~' + article.title,
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
            // add new record to array
            recordArray[i] = record;
          });
          // makes sure we don't duplicate articles
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
