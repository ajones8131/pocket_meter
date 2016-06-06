import Ember from 'ember';

export default Ember.Component.extend({
  commentText: '',
  remainingChars: Ember.computed('commentText', function() {
    return 250 - this.get('commentText').length;
  }),
  noCharsLeft: Ember.computed('remainingChars', function() {
    return(this.get('remainingChars') < 0);
  }),
  store:Ember.inject.service(),
  actions:{
    close: function(){
      this.sendAction('close');
    },
    post: function(){
      this.sendAction('post');
      this.sendAction('close');
    }
  }

});
