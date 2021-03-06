import Ember from 'ember';
import $ from 'jquery';


// var for WebSocket connection
let socket;
let sentMessage = false;
const INPUT_SELECTOR = '[data-chat="message-input"]';

export default Ember.Controller.extend({
  init: function() {
    // connect to WebSockets server
    socket = new WebSocket('ws://localhost:3001');
    registerMessageHandler((modelObject) => {
      var type = modelObject.split('~');
      if (sentMessage === false) {
        if (type[0] === 'upvote') {
          this.addUpVote();
        } else if (type[0] === 'message') {
          this.addMessage(type[1]);
        }
      } else {
        sentMessage = false;
      }
    });
  },
  actions: {
    upVote() {
      var article = this.get('content')[0];
      var curr_upVotes = article.get('upVotes');
      article.set('upVotes', curr_upVotes + 1);
      sentMessage = true;
      socket.send('upvote');
    },
    addMessage() {
      var article = this.get('content')[0];
      var input = $(INPUT_SELECTOR).val();
      $(INPUT_SELECTOR)[0].value = '';
      var messages = article.get('messages');
      var mTimes = article.get('mTimes');
      var totalMessages = article.get('totalMessages');
      console.log(messages);
      messages.push(input);
      console.log(mTimes);
      mTimes.push(new Date());
      article.set('mTimes', mTimes.slice());
      article.set('messages', messages.slice());
      article.set('totalMessages', totalMessages + 1);
      sentMessage = true;
      socket.send('message~' + input);
    }
  },
  addUpVote: function() {
    var article = this.get('content')[0];
    var curr_upVotes = article.get('upVotes');
    article.set('upVotes', curr_upVotes + 1);
  },
  addMessage: function(message) {
    var article = this.get('content')[0];
    var messages = article.get('messages');
    var totalMessages = article.get('totalMessages');
    messages.push(message);
    article.set('messages', messages.slice());
    article.set('totalMessages', totalMessages + 1);
  }
});

function registerMessageHandler(handlerFunction) {
  socket.onmessage = (e) => {
    console.log('message', e.data);
    handlerFunction(e.data);
  };
}
