const FollowToggle = require('./followToggle');
const UsersSearch = require('./users_search');


$( () => {
  $("button.follow-toggle").each(function(i) {
    let followToggle = new FollowToggle(this);
    
    console.log(`hello ${followToggle.userId}`);
  });
  
    new UsersSearch($("nav.users-search"));
});