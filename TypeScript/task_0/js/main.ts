interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const student1: Student = {
	firstName: "Pierre",
	lastName: "Bonnard",
	age: 34,
	location: "France"
}

const student2: Student = {
	firstName: "Eli",
	lastName: "Ricard",
	age: 25,
	location: "Sverige"
}

let studentsList: Student[] = [student1, student2]

const table = document.createElement("table") as HTMLTableElement;
table.setAttribute('id', 'myTable');
document.body.appendChild(table);

studentsList.forEach((student) => {
	const row = document.createElement("tr") as HTMLTableRowElement;
	const firstName = document.createElement('td') as HTMLTableCellElement;
	const location = document.createElement('td') as HTMLTableCellElement;

	firstName.innerHTML = student.firstName;
	location.innerHTML = student.location;

	row.appendChild(firstName);
	row.appendChild(location)
	table.appendChild(row)
})


