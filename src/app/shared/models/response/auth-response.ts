export interface AuthResponse {
	token: string;
	expires: string;
}

export interface AvailableUsernameResponse {
	username: string;
}

export interface AvailableEmailResponse {
	email: string;
}

export interface AuthenticatedUserResponse {
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	secondLastName: string;
}