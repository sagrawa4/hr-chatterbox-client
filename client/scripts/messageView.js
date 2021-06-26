var MessageView = {

  render: _.template(`
      <div class="chats <%= roomname %>">
        <div class="username"><%= username %></div>
        <div><%= message %></div>
      </div>
    `)

};