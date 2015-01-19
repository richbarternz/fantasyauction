Meteor.subscribe("teams");

Template.team.helpers({
  participant_name: function() {
    participant = Participants.findOne({_id: this.participant_id});
    return participant.display_name
  },
  player_name: function() {
    player = Players.findOne({_id: this.player_id});
    return player.fullname
  }  
}); 

Template.dashboard.events({
  "submit .new-team": function (event) {

    var participant_id = event.target.participantname.value;
    var player_id = event.target.playername.value;  
    var price_paid = event.target.pricepaid.value; 
    var tw_bought = event.target.twbought.value;                                                                    

    Meteor.call("addTeam", participant_id, player_id, price_paid, tw_bought);

    return false;
  }
});

Template.dashboard.events({
  "click .delete": function () {
    Meteor.call("deleteTeam", this._id);
  }
}); 