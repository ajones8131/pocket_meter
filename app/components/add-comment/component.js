import Ember from 'ember';

export default Ember.Component.extend({
  store:Ember.inject.service(),

  actions:{
    close: function(){
      this.sendAction('close');
    },
    setRating:function(userRating){
      document.getElementById("ratingBox").value = userRating;
    },
    post: function(){
      var user = this.get('usernameText');
      var text = this.get('commentText');
      var ratingText = this.get('rating');

      if(user == null){
        user = "annonymous";
      }


      const newComment = this.get('store').createRecord('comment');
      newComment.set('username', user);
      newComment.set('description', text);
      newComment.set('rating', ratingText);
      newComment.set('timestamp', new Date());

      //Save the comment
      newComment.save();
      this.sendAction('close');
    }
  }

});
