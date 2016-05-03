import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewComment() {
      this.sendAction('addNewComment');
    },
    close() {
      this.sendAction('close');
    }
  }
});
