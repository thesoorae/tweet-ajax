const APIUtil = {

  followUser: id => APIUtil.updateFollowing(id, 'POST'),

  unfollowUser: id => APIUtil.updateFollowing(id, 'DELETE'),

  updateFollowing: (id, method) => {
    return $.ajax({
      url:`/users/${id}/follow`,
      dataType: 'json',
      method
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      url:"/users/search",
      data: {'query': queryVal},
      dataType: 'json',
      method: "GET",
      success
    });
  }
};



module.exports = APIUtil;
