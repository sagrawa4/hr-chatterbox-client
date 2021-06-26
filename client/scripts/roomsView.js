var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    RoomsView.$button.click(Rooms.add);
    RoomsView.$select.change(Rooms.filter);
  },

  render: function() {
    RoomsView.$select.html('');
    RoomsView.$select.prepend($('<option selected disabled>Select</option>'));
    for ( var key of Rooms.set) {
      RoomsView.renderRoom(key);
    }
  },

  renderRoom: function(room) {
    RoomsView.$select.append($(
      '<option value="' + room + '">' + room + '</option>'));
  }
};
