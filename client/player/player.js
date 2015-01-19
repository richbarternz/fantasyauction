Meteor.subscribe("players");

Template.player.helpers({
  club_name: function() {
    club = Clubs.findOne({_id: this.club_id});
    return club.club_name
  }
}); 

Template.dashboard.events({
  "submit .new-player": function (event) {

    var position = event.target.position.value,
        fullname = event.target.fullname.value,
        club_id = event.target.clubname.value,
        price_cost = event.target.price_cost.value;                                                                  

 // here
     Meteor.call("addPlayer", position, fullname, club_id, price_cost);

    // Clear form
    event.target.position.value = "",
    event.target.fullname.value = "",
    event.target.price_cost.value = "";

    return false;
  }
}); 

Template.dashboard.events({
  "click .delete": function () {
    Meteor.call("deletePlayer", this._id);
  }
});