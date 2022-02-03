class Person{
    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }

    generateCode(){
        const now = new Date();
        const actualYear = now.getFullYear();
        const birthYear = actualYear - this.age;
        const code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear + this.gender;
        return code;
    }
}