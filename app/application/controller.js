import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'sortProperties'),
  showSidebar: Ember.computed('hideSidebar', function(){
    var returnValue = true;
      if((this.hideSidebar == false) || (this.hideSidebar == null))
        returnValue = false;

      return !returnValue;
  }),
  actions:{
    toggleSidebar(){
      this.toggleProperty('hideSidebar');
    }
  }
});
