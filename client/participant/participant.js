Template.dashboard.events({
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
      createdAt: new Date()
    });

    // Clear form
    event.target.display_name.value = "",
    event.target.first_name.value = "",
    event.target.last_name.value = "",
    event.target.email.value = "";

    return false;
  }
}); 

Template.dashboard.events({
  "click .delete": function () {
    Participants.remove(this._id);
  }
}); 