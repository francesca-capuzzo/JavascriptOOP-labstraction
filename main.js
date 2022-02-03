let student1 = new Student("pippo", "de paolis", 13, "m");

student1.grade = 7
student1.grade = 9
student1.grade = 10
student1.grade = 3
student1.grade = 2.5

console.log(student1.grade);
console.log("nome studente", student1.name);


let student2 = new Student("paperino", "duck", 13, "m");



let student3 = new Student("osvaldo", "ferraris", 16, "m");

student3.grade = 7
student3.grade = 9
student3.grade = 6
student3.grade = 3
student3.grade = 4


let student4 = new Student("loredana", "piottelli", 15, "f");

student4.grade = 7
student4.grade = 9
student4.grade = 6
student4.grade = 10


let teacher1 = new Teacher("paperone", "duck", 80,"m","terza media");

teacher1.addStudent(student1);
teacher1.addStudent(student2);

teacher1.addGrade("padu2009", 7);
teacher1.addGrade("padu2009", 3);


let teacher2 = new Teacher("paperoga", "paperis", 27, "f", "prima superiore")

teacher2.addStudent(student3);

console.log("codice insegnante", teacher2.generateCode());


let principal = new Principal("pico", "de paperis", 41, "m", "istituto comprensivo paperopolese")

console.log("codice preside", principal.generateCode());

principal.addTeacher(teacher1);

principal.addTeacher(teacher2);


principal.addStudentToTeacher("paperis", student4);


console.log(principal.bestTeacherToString())
