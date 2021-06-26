var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    MessagesView.$chats.html('');
    for (var message of Messages.result) {
      if (!message.username) {
        message.username = 'Anonymous';
      }
      if (!message.roomname) {
        message.roomname = 'Lobby';
      }

      var messageInfo = {
        username: message.username,
        message: message.text,
        roomname: message.roomname
      };
      MessagesView.renderMessage(messageInfo);
    }
  },

  renderMessage: function(message) {
    var chatHtml = MessageView.render(message);
    MessagesView.$chats.append(chatHtml);
  },

};