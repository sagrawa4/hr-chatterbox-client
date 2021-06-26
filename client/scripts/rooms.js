var Rooms = {
  roomname: null,

  set: new Set(),

  add: function() {
    Rooms.roomname = window.prompt('Enter new room name');
    Rooms.set.add(Rooms.roomname);
    RoomsView.render();
  },

  filter: function() {
    var selectedRoom = RoomsView.$select.val();
    MessagesView.render(selectedRoom);
  }
};