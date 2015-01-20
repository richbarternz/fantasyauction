Meteor.methods({
  addTeam: function (participant_id, player_id, price_paid, tw_bought) {
    Teams.insert({
      participant_id: participant_id,
      player_id: player_id,
      price_paid: price_paid,
      tw_bought: tw_bought,
      createdAt: new Date()
    }); 
  }
});
