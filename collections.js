Clubs = new Mongo.Collection("clubs");
Leagues = new Mongo.Collection("leagues");
Teams = new Mongo.Collection("teams");
Players = new Mongo.Collection("players");

Router.map(function(){
    this.route('home', {path: '/'} );
    this.route('dashboard');
    this.route('auction');
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Clubs.find().count() === 0) {
      Clubs.insert({club_name: "Arsenal"});
      Clubs.insert({club_name: "Aston Villa"});
      Clubs.insert({club_name: "Burnley"});
      Clubs.insert({club_name: "Chelsea"});
      Clubs.insert({club_name: "Crystal Palace"});
      Clubs.insert({club_name: "Everton"});
      Clubs.insert({club_name: "Hull"});
      Clubs.insert({club_name: "Leicester"});
      Clubs.insert({club_name: "Liverpool"});
      Clubs.insert({club_name: "Man City"});
      Clubs.insert({club_name: "Man Utd"});
      Clubs.insert({club_name: "Newcastle"});
      Clubs.insert({club_name: "QPR"});
      Clubs.insert({club_name: "Southampton"});
      Clubs.insert({club_name: "Stoke"});
      Clubs.insert({club_name: "Sunderland"});
      Clubs.insert({club_name: "Swansea"});
      Clubs.insert({club_name: "Tottenham"});
      Clubs.insert({club_name: "West Brom"});
      Clubs.insert({club_name: "West Ham"});
    }   
  });
}

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
  },
  joinLeague: function (league_id, current_user_id) {
    // If there is a league with tha id
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

  },    
  addPlayer: function (position, fullname, club_id, price_cost) {
    Players.insert({
      position: position,
      fullname: fullname,
      club_id: club_id,
      price_cost: price_cost,
      createdAt: new Date()
    });
  },
  deletePlayer: function (playerId) {
    Players.remove(playerId);
  },  
  addTeam: function (participant_id, player_id, price_paid, tw_bought) {
    Teams.insert({
      participant_id: participant_id,
      player_id: player_id,
      price_paid: price_paid,
      tw_bought: tw_bought,
      createdAt: new Date()
    }); 
  },
  deleteTeam: function (teamId) {
    Teams.remove(teamId);
  },
});
