import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  urlToImage: DS.attr('string'),
  publishedAt: DS.attr('date'),
  upVotes: DS.attr('number'),
  totalMessages: DS.attr('number'),
  messages: DS.attr({
    message: DS.attr('string')
  })
});
