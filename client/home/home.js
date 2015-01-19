Template.home.helpers({
  participants: function () {
    return Participants.find({});
  },
  players: function () {
    return Players.find({});
  },
  teams: function () {
    return Teams.find({});
  },
  clubs: function () {
    return Clubs.find({});
  },
  leagues: function () {
    return Leagues.find({});
  },
  my_leagues: function() {
    var leagues = Leagues.find({'_id': {'$in' : Meteor.user().league_ids}});
    return leagues;
  }
});



Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});