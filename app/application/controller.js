import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'sortProperties'),
  actions:{
    toggleSidebar(){
      this.toggleProperty('hideSidebar');
    }
  }
});
