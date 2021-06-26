var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO
  },

  render: function() {
    // Clear Message Feed
    MessagesView.$chats.html('');
    // Iterate through all messages and append to DOM
    for (var message of Messages.result) {
      // Provide defaults if no user input
      if (!message.username) {
        message.username = 'Anonymous';
      }
      if (!message.roomname) {
        message.roomname = 'Lobby';
      }
      // Build chat info
      var messageInfo = {
        username: message.username,
        message: message.text,
        roomname: message.roomname
      };
      MessagesView.renderMessage(messageInfo);
    }
  },

  renderMessage: function(message) {
    // Pass chat info to Underscore template in messageView, append to DOM
    var chatHtml = MessageView.render(message);
    MessagesView.$chats.append(chatHtml);
  },

};