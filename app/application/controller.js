import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    toggleComments(){
      this.toggleProperty('showComments');
    },
    createComment(){
      //create and set fields
      const newComment = this.store.createRecord('comment');
      newComment.set('username', "annonymous");
      newComment.set('description', "Great Job");
      newComment.set('rating', 4.5);
      newComment.set('timestamp', new Date());

      //Save the comment
      newComment.save();
    }
  }
});
