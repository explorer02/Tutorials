class Student {
	constructor(id, reading, ref = undefined) {
		this._id = id;
		this._reading = reading;
		this.domref = ref;
	}
	get id() {
		return this._id;
	}
	set id(newId) {
		console.error('You cannot change ID on student');
	}
	get reading() {
		return this._reading;
	}
	set reading(newReading) {
		if (!this.domref.checkStudExist(this.id)) return;
		let change = newReading !== this._reading;
		this._reading = newReading;
		if (change) this.domref.startTimer();
	}
}

////////////////////////////////////////////

class StudentDom {
	constructor(studs, time) {
		let studsCopy = studs.map((stud) => this.deepCopy(stud));
		this.studs = {};
		this.ids = [];
		studsCopy.forEach((stud) => {
			this.studs[stud.id] = stud;
			this.ids.push(stud.id);
		});
		this.time = time;
		this.timerID = undefined;
	}
	deepCopy(stud) {
		return new Student(stud.id, stud.reading, {
			startTimer: this.startTimer.bind(this),
			checkStudExist: this.checkStudExist.bind(this)
		});
	}
	getStudentById(id) {
		return this.studs[id];
	}
	append(stud) {
		if (!this.studs[stud.id]) {
			this.studs[stud.id] = this.deepCopy(stud);
			this.ids.push(stud.id);
			this.startTimer();
		}
	}
	remove(id) {
		let index = this.ids.findIndex((_id) => _id === id);
		if (index > -1) {
			this.ids.splice(index, 1);
			delete this.studs[id];
			this.startTimer();
		}
	}
	checkStudExist(id) {
		if (this.studs[id]) return true;
	}
	startTimer() {
		if (!this.timerID) {
			this.timerID = setTimeout(() => this.reflectChanges(), this.time);
		}
	}
	stopTimer() {
		this.timerID = undefined;
	}
	reflectChanges() {
		this.ids.forEach((id) =>
			console.log('ID:', id, 'Reading', this.studs[id].reading)
		);
		this.stopTimer();
	}
}

//////////////////////////////////////

let studs = [
	new Student(1, true),
	new Student(2, false),
	new Student(3, false),
	new Student(4, true),
	new Student(5, true)
];

let newStud = new Student(6, false);

let dom = new StudentDom(studs, 2000);
