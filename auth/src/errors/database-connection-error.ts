import { CustomError } from '../errors/custom-error';

export class DatabaseConnectionError extends CustomError {
	statusCode = 500;
	reason = 'Error Connecting to database';
	constructor() {
		super('Error loging into DB...');

		// only because we are extending built in Error class
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}

	serializeErrors(): { message: string }[] {
		return [{ message: this.reason }];
	}
}
