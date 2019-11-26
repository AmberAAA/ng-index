import {trigger, state, style, animate, transition, AnimationTriggerMetadata} from '@angular/animations';

export const hiddenShow = trigger('hiddenShow', [
  state('hidden', style({
    top: '-50px',
    opacity: 0,
  })),
  state('show', style({
    top: '0',
    opacity: 1,
  })),
  transition('hidden <=> show', [
    animate('0.5s ease-out')
  ])
]);
