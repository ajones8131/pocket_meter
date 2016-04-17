// app/mirage/config.js

export default function() {
  this.namespace = 'api';
  this.get('/comments');
}
