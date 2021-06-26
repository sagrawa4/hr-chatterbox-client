var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var $message = $('#message').val();
    var $room = null;
    var message = {
      username: App.username,
      text: $message,
      roomname: $room
    };
    // MessagesView.renderMessage(message);

    /*fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      Messages.result = data;
      MessagesView.render();
      callback();
    });
  },*/
    Parse.create(message, function() {
      App.fetch(App.stopSpinner);
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};