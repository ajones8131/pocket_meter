import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    toggleComments(){
      this.toggleProperty('showComments');
    }
  }
});
