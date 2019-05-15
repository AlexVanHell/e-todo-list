type AlertButtonColors = 'primary' | 'warning' | 'danger' | 'info' | 'secondary' | 'link' | 'success' | 'default';

export interface MainAlert {
	title?: string;
	body?: string;
	cancelButton?: boolean;
	cancelButtonText?: string;
	acceptButtonText?: string;
	acceptButtonColor?: AlertButtonColors;
	cancelButtonColor?: AlertButtonColors;
	important?: boolean;
}

export interface MainAlertAction {
	accepted: boolean;
	canceled: boolean;
}

export interface MainAlertStream {
	resolve: (value?: MainAlertAction) => void | PromiseLike<void>,
	info: MainAlert
}