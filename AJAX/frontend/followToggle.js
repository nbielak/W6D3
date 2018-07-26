const APIUtil = require ('./api_util');

class FollowToggle {
  
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("follow-status");
    console.log(this);
    this.handleClick();
    this.render();
  }
  
  render() {
    if (this.followState === false) {
      this.$el.text("Follow");
      this.$el.prop("disabled", false);
    } else if (this.followState === "following"){
      this.$el.text("following");
      this.$el.prop("disabled", true);
    } else if (this.followState === "unfollowing"){
      this.$el.text("unfollowing");
      this.$el.prop("disabled", true);
    } else {
      this.$el.text("Unfollow");
      this.$el.prop("disabled", false);
    }
  }
  
  handleClick() {
    const that = this;
    this.$el.on("click", (event =>{
      event.preventDefault();
      if (!this.followState) {
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userId)
        .then(result =>{
          console.log("Very Great SUCCESS");
          that.followState = true;
          that.render();
        });
      } else {
        this.followState = "unfollowing";
        this.render();
        APIUtil.unfollowUser(this.userId)
        .then(result => {
          console.log("Very Sad SUCCESS");
          that.followState = false;
          that.render();
        });
      } 
    }));
  }
  
  //END OF CLASS
}

module.exports = FollowToggle;