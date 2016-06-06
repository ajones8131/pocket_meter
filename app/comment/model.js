import Model from 'ember-data/model';
import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	username: DS.attr('string'),
  description: DS.attr('string'),
  rating: DS.attr('number'),
  timestamp: DS.attr('date'),
	user: belongsTo('user')
});
