Template.dashboard.helpers({
  participants: function () {
    return Participants.find({});
  },
  players: function () {
    return Players.find({});
  },
  clubs: function () {
    return Clubs.find({});
  }
});