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

    Players.insert({
      position: position,
      fullname: fullname,
      club_id: club_id,
      price_cost: price_cost,
      createdAt: new Date()
    });

    // Clear form
    event.target.position.value = "",
    event.target.fullname.value = "",
    event.target.price_cost.value = "";

    return false;
  }
}); 

Template.dashboard.events({
  "click .delete": function () {
    Players.remove(this._id);
  }
});