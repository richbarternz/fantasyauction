Meteor.methods({
  joinLeague: function (league_id, current_user_id) {
    // If there is a league with that id
    if (Leagues.findOne({_id: league_id})) {
      // Update the users profile to include that league id, in their 'league_ids' array
      Meteor.users.update({_id: current_user_id}, { 
        $addToSet:{"league_ids": league_id}
      }, {multi: true} );
      // Add the user ID to the league's document
      Leagues.update({_id: league_id}, { 
        $addToSet:{"users_ids": current_user_id}
      }, {multi: true});      
      alert("Successfully joined league!");
      // Else advise
    } else {
      alert("League code does not exist!");
    }
  }
});
