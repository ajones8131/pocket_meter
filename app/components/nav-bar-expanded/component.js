import Ember from 'ember';

export default Ember.Component.extend({
  store:Ember.inject.service(),

  actions:{
    toggleAddComment(){
      this.toggleProperty('addComment');
    },
    toggleShowComments(){
      this.toggleProperty('showComments');
    }

  }

});
