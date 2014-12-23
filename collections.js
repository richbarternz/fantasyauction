Clubs = new Mongo.Collection("clubs");
Participants = new Mongo.Collection("participants");
Players = new Mongo.Collection("players");

Router.map(function(){
    this.route('home', {path: '/'} );
    this.route('dashboard');
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
    if (Participants.find().count() === 0) {
      Participants.insert({display_name: "Rich", first_name: "Rich", last_name: "Barter", email: "richb6@gmail.com"});
      Participants.insert({display_name: "Nose", first_name: "Theo", last_name: "Khoja", email: "theokhoja@hotmail.com"});
      Participants.insert({display_name: "Dave", first_name: "David", last_name: "Corbitt", email: "dcorbitt@hotmail.co.uk"});
      Participants.insert({display_name: "Mark", first_name: "Mark", last_name: "Powney", email: "markp2306@hotmail.co.uk"});
      Participants.insert({display_name: "Ross", first_name: "Ross", last_name: "Parrett", email: "ross.m.s.parrett@googlemail.com"});
      Participants.insert({display_name: "Adam", first_name: "Adam", last_name: "Parrett", email: "adam_parrett@hotmail.com"});                              
      Participants.insert({display_name: "Phil", first_name: "Phil", last_name: "Roden", email: "philip.roden@hotmail.co.uk "});      
    }    
  });
}