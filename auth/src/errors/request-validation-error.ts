import { ValidationError } from 'express-validator';
import { CustomError } from '../errors/custom-error';

export class RequestValidationError extends CustomError {
	statusCode = 400;
	constructor(public errors: ValidationError[]) {
		super('Invalid Request parameters...');

		// only because we are extending built in Error class
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}
	serializeErrors(): { message: string; field: string }[] {
		return this.errors.map((error: { msg: string; param: string }) => ({
			message: error.msg,
			field: error.param,
		}));
	}
}
