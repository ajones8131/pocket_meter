import Ember from 'ember';

export default Ember.Component.extend({
  commentText: '',
  remainingChars: Ember.computed('commentText', function() {
    return 250 - this.get('commentText').length;
  }),
  noCharsLeft: Ember.computed('remainingChars', function() {
    return(this.get('remainingChars') < 0);
  }),
  store:Ember.inject.service(),
  actions:{
    close: function(){
      this.sendAction('close');
    },
    post: function(){
      var user = this.get('usernameText');
      var text = this.get('commentText');
      var ratingNum = document.ratingForm.rating.value;



      //create new comment
      var newComment = this.get('store').createRecord('comment', {
        username: user,
        description: text,
        rating: ratingNum,
        timestamp: new Date()
      });

      //Save the comment
      newComment.save();
      this.sendAction('close');
    }
  }

});
