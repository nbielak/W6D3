const APIUtil = {
  followUser: id => {
    return $.ajax({
      type: "POST",
      url: `/users/${id}/follow`,
      dataType: "json",
    });
  },

  unfollowUser: id => {
    return $.ajax({
      type: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json",
    });
  },
  
  usersSearch: (queryval, success) => {
    return $.ajax({
      type: "GET",
      dataType: "json",
      url: "/users/search",
      data: {query: queryval},
    });
  }


//END CLASS
};

module.exports = APIUtil;