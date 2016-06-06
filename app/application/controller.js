import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'sortProperties'),
  actions:{
    toggleSidebar(){
      this.toggleProperty('hideSidebar');
    },
    postNewComment: function(){
      //get data from ratingForm form
      var user = document.ratingForm.usernameText.value;
      var text = document.ratingForm.commentText.value;
      var ratingNum = document.ratingForm.rating.value;


      if(user==='' || user===null || ratingNum==='' || ratingNum===null || text==='' || text===null){
        return false;
      }
      var thisUser = this.store.find('user', 1);
      //create new comment
      var newComment = this.get('store').createRecord('comment', {
        username: user,
        description: text,
        rating: ratingNum,
        timestamp: new Date(),
        user: thisUser
      });

      //Save the new comment
      newComment.save();
    }
  },
});
