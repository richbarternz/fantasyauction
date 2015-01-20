Meteor.methods({
  addLeague: function (league_name, league_admin) {
    Leagues.insert({
      league_name: league_name,
      league_admin: league_admin,      
      createdAt: new Date()
    }, function(err, res) {
      if (err) {
        throw new Meteor.Error(500, 'League not added successfully' );
      }
      // Add the league ID to the user's profile
      Meteor.users.update({_id: league_admin}, { 
        $addToSet:{"league_ids": res}
      }, {multi: true}); 
      // Add the user ID to the league's document
      Leagues.update({_id: res}, { 
        $addToSet:{"users_ids": league_admin}
      }, {multi: true});

    }); 
  }
});

