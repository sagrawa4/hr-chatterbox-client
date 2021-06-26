var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', function() {
      Friends.toggleStatus($(this));
    });
  },

  render: function(roomname) {
    // Clear Message Feed
    var filter = false;
    if (roomname !== undefined) {
      filter = true;
    }
    MessagesView.$chats.html('');
    // Iterate through all messages and append to DOM
    for (var message of Messages.result) {
      // Provide defaults if no user input
      if (filter && roomname !== message.roomname) {
        continue;
      }

      if (!filter) {
        if (!message.roomname) {
          message.roomname = 'Lobby';
        }
      }

      if (!message.text) {
        message.text = 'No message';
      }
      if (!message.username) {
        message.username = 'Anonymous';
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
  }
};