import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

export const sidebarOpenClose = trigger('openClose', [
	state('open', style({
		left: '0',
	})),
	state('closed', style({
		left: '-100%'
	})),
	transition('open => closed', [
		animate('1s'),
	]),
	transition('closed => open', [
		animate('1s')
	])
]);