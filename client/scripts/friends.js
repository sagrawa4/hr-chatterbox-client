var Friends = {

  listOfFriends: new Set(),

  toggleStatus: function($friend) {
    Friends.listOfFriends.add($friend.html());
    $friend.toggleClass('friend');
  }
};