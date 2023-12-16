//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get namevalue(){
		console.log(this._name);
	}
	set agevalue(age){
		this._age=age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
