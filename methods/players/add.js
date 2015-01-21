Meteor.methods({
  addPlayer: function (position, fullname, club_id, price_cost) {
    Players.insert({
      position: position,
      fullname: fullname,
      club_id: club_id,
      price_cost: price_cost,
      createdAt: new Date()
    });
  }
});
