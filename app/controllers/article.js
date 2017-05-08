import Ember from 'ember';
import $ from 'jquery';

// var for WebSocket connection
let socket;
let contentModel;
let sentMessage = false;
const INPUT_SELECTOR = '[data-chat="message-input"]';

export default Ember.Controller.extend({
  init: function() {
    // connect to WebSockets server
    socket = new WebSocket('ws://localhost:3001');
    registerMessageHandler((modelObject) => {
      var type = modelObject.split('~');
      if (sentMessage == false) {
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
      var messages = article.get('messages');
      var totalMessages = article.get('totalMessages');
      messages.push(input);
      article.set('messages', messages);
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
    var input = $(INPUT_SELECTOR).val();
    var messages = article.get('messages');
    var totalMessages = article.get('totalMessages');
    messages.push(input);
    article.set('messages', messages);
    article.set('totalMessages', totalMessages + 1);
  }
});

function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = (e) => {
    console.log('message', e.data);
    handlerFunction(e.data);
  };
}

// turn message payload into JSON string
function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}
