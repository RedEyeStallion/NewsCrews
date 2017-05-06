import Ember from 'ember';
var $ = window.jQuery;
let recordArray = [];
let loaded = false;

export default Ember.Route.extend({
  /*
  beforeModel() {
    let Dstore = this.store;
    $.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=538efd35759443348adfb06e7bcd1689").then((data) => {
      console.log(data);
      data.articles.forEach(function(article, i) {
        let record = Dstore.createRecord('buzzfeed', {
          "author": article.author,
          "title": article.title,
          "description": article.description,
          "url": article.url,
          "urlToImage": article.urlToImage,
          "publishedAt": article.publishedAt
        });
        console.log(i + ' ' + article.author);
        recordArray[i] = record;
      });
    });
  },
  model() {
  }
  */
  beforeModel: function() {
    let Dstore = this.store;
    if (!loaded) {
      return new Ember.RSVP.Promise(function(resolve) {
        $.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=538efd35759443348adfb06e7bcd1689").then((data) => {
          console.log(data);
          data.articles.forEach(function(article, i) {
            let record = Dstore.createRecord('buzzfeed', {
              "id": article.title,
              "author": article.author,
              "title": article.title,
              "description": article.description,
              "url": article.url,
              "urlToImage": article.urlToImage,
              "publishedAt": article.publishedAt,
              "upVotes": 0
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
