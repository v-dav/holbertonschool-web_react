export interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any,
}

interface Directors extends Teacher {
	numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working'
	}

	displayName(): string {
		return this.firstName;
	}
}

export interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClass;
}

export interface StudentClassInterface {
	firstName: string,
	lastName: string,
	workOnHomework(): string,
	displayName(): string
}

export interface DirectorInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string,
}

export interface TeacherInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workTeacherTasks(): string,
}

export const Director = class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

export const Teacher = class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workTeacherTasks(): string {
		return 'Getting to director tasks';
	}
}

export function createEmployee(salary: number): DirectorInterface | TeacherInterface {
	if (salary < 500) {
		return new Teacher;
	}
	return new Director;
}

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
	return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

export type Subjects = 'Math' | 'History';

export function teachclass(todayClass: Subjects): string {
	if (todayClass === 'Math') { return 'Teaching Math' };
	if (todayClass === 'History') { return 'Teaching History' };
}
