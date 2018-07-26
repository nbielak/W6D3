const APIUtil = require('./api_util');

class UsersSearch {
  constructor(el) {
    this.$el = el;
    this.$input = this.$el.find("input");
    this.$ul = $(this.$el.ul);
    this.handleInput();
  }
  renderResults(result) {
    this.$ul.empty();
    console.log(result);
    result.each( el => {
      let $li = $("<li></li>");
      // let $a = $("<a></a>");
      // $a.data("href", `/users/$`);
      $li.text(el.username);
      this.$ul.append($li); 
    });
  }
  
  
  handleInput() {
    this.$input.on("input", e => {
      e.preventDefault();
      APIUtil.usersSearch(this.$input.val())
      .then(result => {
        this.renderResults(result);
      });
    });  
  }
  //END OF CLASS
} 

module.exports = UsersSearch;