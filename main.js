let student1 = new Student("pippo", "de paolis", 13, "m");

student1.addGrade(7);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(2.5);


let student2 = new Student("paperino", "duck", 13, "m");


let teacher = new Teacher("paperone", "duck", 80,"m","terza media");

teacher.addStudent(student1);
teacher.addStudent(student2);

teacher.addGrade("padu2009", 7);
teacher.addGrade("padu2009", 3);

console.log(teacher.bestStudent());

// console.log(student1.calculateMean());

// console.log(student1.generateCode());

// console.log(student2.toString())