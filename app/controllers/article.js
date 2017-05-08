import Ember from 'ember';
import $ from 'jquery';


// var for WebSocket connection
let socket;
const INPUT_SELECTOR = '[data-chat="message-input"]';

export default Ember.Controller.extend({
  init: function() {
    // connect to WebSockets server
    socket = new WebSocket('ws://localhost:3001');
  },
  actions: {
    upVote() {
      var article = this.get('content')[0];
      var curr_upVotes = article.get('upVotes');
      article.set('upVotes', curr_upVotes + 1);
    },
    addMessage() {
      console.log('Adding Messages');
      var article = this.get('content')[0];
      var input = $(INPUT_SELECTOR).val();
      var messages = article.get('messages');
      var totalMessages = article.get('totalMessages');
      messages.push(input);
      article.set('messages', messages);
      article.set('totalMessages', totalMessages + 1);
      console.log(messages);
      console.log(totalMessages + 1);
    }
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
    let data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

// turn message payload into JSON string
function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}
