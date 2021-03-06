var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    // This is the username provided by user via alert
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // Save data to Messages
      Messages.result = data;

      for (var i = 0; i < data.length; i++) {
        Rooms.set.add(data[i].roomname);
      }
      //console.log(Rooms.set);
      // Call render to display messages in DOM
      MessagesView.render();
      RoomsView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
