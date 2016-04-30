import Ember from 'ember';

export default Ember.Component.extend({
  store:Ember.inject.service(),

  actions:{
    close: function(){
      this.sendAction('close');
    },
    post: function(){
      var user = this.get('usernameText');
      var text = this.get('commentText');
      var ratingNum = document.ratingForm.rating.value;
      var error = 0;

      if(text == null){
        document.getElementById('commentArea').style.backgroundColor="#ffe7e4";
        document.getElementById('commentArea').style.borderColor="red";
        error = 1;
      }
      if(ratingNum == 0){
        document.getElementById('errorText').innerHTML="Please give us a rating";
        error = 1;
      }
      if(error){
        return;
      }
      if(user == null){
        user = "annonymous";
      }


      const newComment = this.get('store').createRecord('comment');
      newComment.set('username', user);
      newComment.set('description', text);
      newComment.set('rating', ratingNum);
      newComment.set('timestamp', new Date());

      //Save the comment
      newComment.save();
      this.sendAction('close');
    }
  }

});
