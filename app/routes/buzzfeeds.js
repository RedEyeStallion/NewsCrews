import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let buzzRecord = this.store.createRecord('buzzfeed',{
      author: 'author',
      title: 'article.title',
      description: 'article.description',
      url: 'article.url',
      urlToImage: 'article.urlToImage',
      publishedAt: 'article.publishedAt'
    });
    return [buzzRecord];
  }
})
