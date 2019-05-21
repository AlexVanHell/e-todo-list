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
			height: '20px',
		})),
		animate('0.5s', style({
			transform: 'translateX(100%)',
		}))
	])
])