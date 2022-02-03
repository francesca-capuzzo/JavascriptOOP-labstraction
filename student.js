class Student extends Person{

    constructor(name, surname, age, gender){
        super(name, surname, age, gender)
        this._grades = [];
    }

    set grade(value){
        if (value >= 0 && value <=10) {
            this._grades.push(value);
        }
    }

    get grade(){
        return this.calculateMean();
    }

    // get gender(){
    //     return this._gender;
    // }


    // get age(){
    //     let now = new Date();
    //     let age = now.getFullYear() - this.yob;
    //     return age
    // }

    // set age(value){
    //     let now = new Date();
    //     this.yob = now.getFullYear() - value;
    // }




    calculateMean(){
        if (this._grades.length === 0) {
            return -1;
        }
        const sum = this._grades.reduce((p, c) => p + c);
        const mean = sum / this._grades.length;
        return mean;
    }



    toString(){

        let mean = this.calculateMean()

        if (mean === -1) {
            mean = "N/c"
        }

        const studentDescription = "Nome: " + this.name + "\n" 
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Media: " + mean;

        return studentDescription;
    }

}
















