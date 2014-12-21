Clubs = new Mongo.Collection("clubs");
Participants = new Mongo.Collection("participants");
Players = new Mongo.Collection("players");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
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

  Template.player.helpers({
    showname: function(club_id) {
      return Clubs.findOne({_id: club_id});
    }
  });  

  Template.body.events({
    "submit .new-participant": function (event) {

      var display_name = event.target.displayname.value,
          first_name = event.target.firstname.value,
          last_name = event.target.lastname.value,
          email = event.target.email.value;                                                                  

      Participants.insert({
        display_name: display_name,
        first_name: first_name,
        last_name: last_name,
        email: email,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.display_name.value = "",
      event.target.first_name.value = "",
      event.target.last_name.value = "",
      event.target.email.value = "";


      // Prevent default form submit
      return false;
    }
  });

  Template.body.events({
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
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.position.value = "",
      event.target.fullname.value = "",
      event.target.price_cost.value = "";


      // Prevent default form submit
      return false;
    }
  });  

  Template.body.events({
    "submit .new-club": function (event) {

      var club_name = event.target.clubname.value;                                                                  

      Clubs.insert({
        club_name: club_name,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.club_name.value = "";

      // Prevent default form submit
      return false;
    }
  });

  // In the client code, below everything else
  Template.participant.events({
    "click .delete": function () {
      Participants.remove(this._id);
    }
  });

  Template.player.events({
    "click .delete": function () {
      Players.remove(this._id);
    }
  });

  Template.club.events({
    "click .delete": function () {
      Clubs.remove(this._id);
    }
  });    

}