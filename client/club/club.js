Meteor.subscribe("clubs");

Template.dashboard.events({
  "submit .new-club": function (event) {

    var club_name = event.target.clubname.value;                                                                  

    Clubs.insert({
      club_name: club_name,
      createdAt: new Date()
    });

    // Clear form
    event.target.club_name.value = "";

    return false;
  }
});

Template.dashboard.events({
  "click .delete": function () {
    Clubs.remove(this._id);
  }
}); 