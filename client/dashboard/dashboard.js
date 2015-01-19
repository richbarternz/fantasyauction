Template.dashboard.helpers({
  players: function () {
    return Players.find({});
  },
  teams: function () {
    return Teams.find({});
  },
  clubs: function () {
    return Clubs.find({});
  }
});