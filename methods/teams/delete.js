Meteor.methods({
  deleteTeam: function (teamId) {
    Teams.remove(teamId);
  }
});
