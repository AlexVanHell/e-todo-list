export interface IUser {
	_id?: string;
	firstName?: string;
	lastName?: string;
	secondLastName?: string;
	email?: string;
	username?: string;

	getFullName?(): string;
}

export class User implements IUser {
	_id?: string;
	firstName?: string;
	lastName?: string;
	secondLastName?: string;
	email?: string;
	username?: string;

	constructor(obj: IUser = {}) {
		Object.assign(this, obj);

	}

	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}