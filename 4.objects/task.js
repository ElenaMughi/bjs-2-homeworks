function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
}

//let student1 = new Student("Vasya", "m", "18");
//let student2 = new Student("Anya", "f", "18");

Student.prototype.setSubject = function (subjectName) {
  // добавляет предмет  
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  // добавляет одну оценку  
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...marks) {
  // добавляет оценки  
  if (this.marks === undefined) { this.marks = []; }
  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function () {
  // вычисляет среднюю оценку  
  let sum = 0;
  this.marks.forEach(item => { sum = sum + item });
  let lenght = this.marks.length;
  return sum / lenght;
}

Student.prototype.exclude = function (reason) {
  // исключает студента и удаляет предмет и оценки  
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}