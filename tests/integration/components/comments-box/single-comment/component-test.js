import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comments-box/single-comment', 'Integration | Component | comments box/single comment', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comments-box/single-comment}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comments-box/single-comment}}
      template block text
    {{/comments-box/single-comment}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
