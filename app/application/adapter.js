// app/application/adapter.js
import DS from 'ember-data';
// import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://pocket-meter-api.herokuapp.com'
});
