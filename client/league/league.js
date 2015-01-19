Meteor.subscribe("leagues");
Meteor.subscribe('users');

Template.league.helpers({
  admin_owner: function() {
    var user = Meteor.users.findOne({_id: this.league_admin});
    return user.username;
  },
  my_leagues: function() {
    var leagues = Leagues.find({'_id': {'$in' : Meteor.user().league_ids}});
    return leagues;
  },
  no_of_members: function() {
    return this.users_ids.length;
  }
}); 

Template.home.events({
  "submit .new-league": function (event) {

    var league_name = event.target.leaguename.value,
        league_admin = Meteor.userId();

     Meteor.call("addLeague", league_name, league_admin);

    // Clear form
    event.target.leaguename.value = "";
    return false;
  },
  "submit .join-league": function (event) {

    var league_id = event.target.leagueid.value,
        current_user_id = Meteor.userId();

     Meteor.call("joinLeague", league_id, current_user_id);

    // Clear form
    event.target.leagueid.value = "";
    return false;
  }  
}); 