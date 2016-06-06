import Ember from 'ember';

export default Ember.Component.extend({
  store:Ember.inject.service(),

  actions:{
    toggleAddComment(){
      this.toggleProperty('addComment');
    },
    postNewComment(){
      this.sendAction('postNewComment');
    },
    toggleShowComments(){
      this.toggleProperty('showComments');
    },
    expand(){
      this.sendAction('expand');
    }

  }

});
