import Model from 'ember-data/model';
import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: DS.attr('string'),
  comments: hasMany('comment')
});
