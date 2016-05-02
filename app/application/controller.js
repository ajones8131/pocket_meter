import Ember from 'ember';

export default Ember.Controller.extend({
  sidebarClass: "sidebar-expanded",
  actions:{
    toggleSidebar(){
      this.toggleProperty('hideSidebar');
      if(sidebarClass ==="sidebar-expanded"){
        sidebarClass = "sidebar-min";
      } else{
        sidebarClass = "sidebar-expanded";
      }
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
