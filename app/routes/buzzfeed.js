import Ember from 'ember';
var $ = window.jQuery;

export default Ember.Route.extend({
  model() {
    let Dstore = this.store;

    $.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=538efd35759443348adfb06e7bcd1689").then((data) => {
      console.log(data);
      data.articles.forEach(function(article) {
        let record = Dstore.createRecord('buzzfeed', {
          "author": article.author,
          "title": article.title,
          "description": article.description,
          "url": article.url,
          "urlToImage": article.urlToImage,
          "publishedAt": article.publishedAt
        });
      });
    });
    return this.store.findAll('buzzfeed');
  }
});
