import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  description: DS.attr('string'),
  timestamp: DS.attr('date')
});
