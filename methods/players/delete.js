Meteor.methods({
  deletePlayer: function (playerId) {
    Players.remove(playerId);
  }  
});
