import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

export const deleteSlide = trigger('deleteSlide', [
	transition(':leave', [
		style({
			overflow: 'hidden'
		}),
		animate('0.1s', style({
			transform: 'scaleY(0.5)',
		})),
		animate('0.5s', style({
			transform: 'scaleY(0.5) translateX(100%)',
		}))
	])
]);