import { target } from 'liquid-tether';

const options = {
  duration: 1000
};

export default function(){
  this.transition(
    target('flyout'),
    this.toValue(({index}) => index === 1),
    this.use('explode', {
      pick: '.flyout',
      use: ['to-left', options]
    }, {
      pick: '.modal-backdrop',
      use: 'fade'
    }),
    this.reverse('explode', {
      pick: '.flyout',
      use: ['to-right', options]
    }, {
      pick: '.modal-backdrop',
      use: 'fade'
    })
  );
}
