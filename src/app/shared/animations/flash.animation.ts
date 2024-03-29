import { animate, animation, sequence, style } from '@angular/animations';

export const flashAnimation = animation([
  sequence([
    animate(
      '{{ time }}',
      style({
        'background-color': '{{ flashColor }}',
      })
    ),
    animate(
      '250ms',
      style({
        'background-color': 'white',
      })
    ),
  ]),
]);
