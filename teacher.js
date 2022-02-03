class Teacher extends Person{
    constructor(name, surname, age, gender, degree) {
        super(name, surname, age, gender);
        this.degree = degree;
        this.students = [];
    }

    toString() {
        let teacherDescription = "Nome: " + this.name + "\n" 
                                 + "Cognome: " + this.surname + "\n"
                                 + "Età: " + this.age + "\n"
                                 + "Classe: " + this.degree + "\n\n"
                                 + "Alunni:\n\n";

        for (const stud of this.students) {
            teacherDescription += stud.toString() + "\n\n";
        }

        return teacherDescription;
    }

    addStudent(student) {
        // let hasStudent = false;
        // for (const stud of this.students) {
        //     if (stud.generateCode() === student.generateCode()) {
        //         hasStudent = true;
        //     }
        // }
        // if (hasStudent === false) {
        //     this.students.push(student);
        // }

        // for (const stud of this.students) {
        //     if (stud.generateCode() === student.generateCode()) {
        //         return;
        //     }
        // }
        // this.students.push(student);

        // let hasStudent = this.students.some(stud => stud.generateCode() === student.generateCode())
        // if (hasStudent === false) {
        //     this.students.push(student);
        // }

        if (!this.students.some(stud => stud.generateCode() === student.generateCode())) {
            this.students.push(student);
        }
    }

    addGrade(studentCode, grade) {
        // for (const stud of this.students) {
        //     if (stud.generateCode() === studentCode) {
        //         stud.addGrade(grade);
        //     }
        // }

        // this.students = this.students.map((stud) => {
        //     if (stud.generateCode() === studentCode) {
        //         stud.addGrade(grade);
        //     }
        //     return stud;
        // });

        this.students.forEach(stud => {
            if (stud.generateCode() === studentCode) {
                stud.grade = grade;
            }
        });

    }

    bestStudent() {

        if (this.students.length === 0) {
            return null;
        }

        // let bestStudent = this.students[0];

        // for (let i = 1; i < this.students.length; i++){
        //     const stud = this.students[i];
        //     if (stud.calculateMean() > bestStudent.calculateMean()) {
        //         bestStudent = stud;
        //     }
        // }
        
        // return bestStudent;

        return this.students.reduce((p, c) => p.calculateMean() > c.calculateMean() ? p : c)

    }


    bestStudentToString(){
        return this.bestStudent.toString()
    }
}