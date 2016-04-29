import DS from 'ember-data';
import { Model } from 'ember-pouch';

var comment = Model.extend({
	username: DS.attr('string'),
  description: DS.attr('string'),
  rating: DS.attr('number'),
  timestamp: DS.attr('date')
});

export default comment;
