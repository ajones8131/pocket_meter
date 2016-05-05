import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'sortProperties'),
  showSidebar: Ember.computed('hideSidebar', function(){
    var norShowSidebar = true;
    //todo: implement !! function or === operator
      if((this.hideSidebar == false) || (this.hideSidebar == null)){
        norShowSidebar = false;
      }
      return !norShowSidebar;
  }),
  actions:{
    toggleSidebar(){
      this.toggleProperty('hideSidebar');
    }
  }
});
