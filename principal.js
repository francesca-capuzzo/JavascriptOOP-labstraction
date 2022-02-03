class Principal extends Person{

    constructor(name, surname, age, gender, school){
        super(name, surname, age, gender);
        this.school = school;
        this.teachers = [];

    }

    toString() {
        let principalDescription =   "Nome: " + this.name + "\n" 
                                 + "Cognome: " + this.surname + "\n"
                                 + "Età: " + this.age + "\n"
                                 + "Scuola: " + this.school + "\n\n"
                                 + "Insegnanti:\n\n";

        for (const teacher of this.teachers) {
            principalDescription += teacher.toString() + "\n\n";
        }

        return principalDescription;
    }

    addTeacher(newTeacher){
        let hasTeacher = false;
        for (const teacher of this.teachers) {
            if (teacher.surname === newTeacher.surname) {
                hasTeacher = true;
            }
        }
        if (hasTeacher === false) {
            this.teachers.push(newTeacher);
        }
    }


    addStudentToTeacher(teacherSurname, student){
        for (const teacher of this.teachers) {
            if (teacher.surname === teacherSurname) {
                teacher.addStudent(student);
            }
        }
    }

    bestTeacher(){
        if (this.teachers.length === 0) {
            return null;
        }

        let bestTeacher = this.teachers[0];

        for (let i = 1; i < this.teachers.length; i++){
            const teacher = this.teachers[i];
            if (bestTeacher.bestStudent().calculateMean() < teacher.bestStudent().calculateMean()) {
                bestTeacher = teacher;
            }

        }
        
        return bestTeacher

    }

    bestTeacherToString(){
        return this.bestTeacher().toString();
    }


    generateCode(){
        // const now = new Date();
        // const actualYear = now.getFullYear();
        // const birthYear = actualYear - this.age;
        // const code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear + this.gender + this.school[0];
        const code = super.generateCode() + this.school[0];
        return code;
    }

}