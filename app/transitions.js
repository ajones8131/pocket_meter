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
    },
  ),
    this.reverse('explode', {
      pick: '.flyout',
      use: ['to-right', options]
    },
  )
  );

  this.transition(
    this.fromRoute('home'),
    this.use('toUp', options),
    this.reverse('toDown', options)
  );
}
