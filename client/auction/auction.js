Template.auction.helpers({
  players: function () {
    return Players.find({});
  }, 
  current_league_id: function() {
    var currentRoute = Router.current().params.query.league_id;
	return currentRoute;
  },  
  current_league_name: function() {
    var currentRoute = Router.current().params.query.league_id,
    	league = Leagues.findOne({_id: currentRoute}),
    	league_name = league.league_name;
	return league_name;
  },
  current_league_users: function () {
    var currentRoute = Router.current().params.query.league_id,
    	league = Leagues.findOne({_id: currentRoute}),
    	users = Meteor.users.find({'_id': {'$in' : league.users_ids}});
    return users;
  }
});