import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
      return Ember.RSVP.hash({
        comments: this.store.findAll('comment')
      });
  },

  // setupController: function(controller, models) {
  //   controller.setProperties(models);
  // },

  actions:{
      createComment(){
        //create and set fields
        const newComment = this.store.createRecord('comment');
        newComment.set('username', "annonymous");
        newComment.set('description', "Great Job");
        newComment.set('rating', 4.5);
        newComment.set('timestamp', new Date());

        //Save the comment
        newComment.save();
        this.transitionTo('home');
      }
    }
  });

//   actions: {
//     createComment: function() {
//       this.controllerFor('comment').set('globals.isEditing', true);
//       var newComment = this.store.createRecord('comment');
//       newComment.set('username', "annonymous");
//       newComment.set('description', "Great Job");
//       newComment.set('rating', 4.5);
//       newComment.set('timestamp', new Date());
//       this.transitionTo('home', newComment.save());
//     },
//
//     saveComment: function() {
//       this.modelFor('comment').save();
//     },
//
//     deleteComment: function() {
//       this.modelFor('comment').destroyRecord().then(function() {
//         this.transitionTo('home');
//       }.bind(this));
//     }
//   }
// });
