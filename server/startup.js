Meteor.startup(function () {
  // Seed database with EPL clubs
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
