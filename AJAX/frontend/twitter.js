const FollowToggle = require("./followToggle.js");
console.log(FollowToggle);

$( () => {
  
  $(".follow-toggle").each(function(i) {
    console.log("hello");
    let followToggle = new FollowToggle(this);
    
    console.log(`hello ${followToggle.userId}`);
  });
});