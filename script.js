// constructor function
let Person = function(name,gender,birthYear){
    this.name=name;
    this.gender=gender;
    this.birthYear=birthYear;
    // this.calcAge = function(){
    //     let age = new Date().getFullYear() - birthYear; 
    //     console.log(age);
    // }
    // return this;
}
// Prototype and Inheritance
Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() - birthYear; 
    console.log(age);
}

// Static

Person.greet = function(){
    console.log('Its is static for person')
}
Person.prototype.city = 'London'
let john = new Person('John','Male',1990);
Person.greet();


// Internal Work
// let john = { }
// this = john
//  john.name =name
// ....

// john.calcAge();
console.log(john);

let easwar = new Person('Easwar','Male',2002);
console.log(easwar);

let steve = new Person('Steve','Male',2000);
console.log(steve);

// Every object creation in javascript is directly or indirectly an instance of object constructor

let amar={
    name:'Amar',
    gender:'Male',
    birthYear:2000
};

// Internal Work
// let amar = new Object() -empty object
//  amar.name='Amar'
//  amar.gender='Male'
//  amar.birthYear=200


// Class

class User{
    constructor(name,gender,birthYear){
        this.name=name;
        this.gender=gender;
        this.birthYear=birthYear;
        // this.calcAge = function(){
        //     let age=new Date().getFullYear() -this.birthYear;
        //     console.log(age);
        // }
    }
    calcAge(){
        let age=new Date().getFullYear() -this.birthYear;
        console.log(age);
    }

    static msg(){
        console.log("Hi all,It's static method");
    }
}

User.prototype.greet = function(){
    console.log("Good Morning "+this.name);
}

let ram=new User("Ram","Male",2001)
console.log(ram);
ram.greet();

User.msg();

// Inheritance
let Person1 = function(name,gender,birthYear){
    this.name=name;
    this.gender=gender;
    this.birthYear=birthYear;
}

// Prototype and Inheritance
Person1.prototype.calcAge = function(){
    let age = new Date().getFullYear() - birthYear; 
    console.log(age);
}


let karthi=Person1("Karthi",'Male',2002)

// this = kumar
let Employee = function(name,gender,birthYear,empId,salary){
    Person1.call(this,name,gender,birthYear);
    this.empId=empId;
    this.salary=salary;
}
Employee.prototype = Person1.prototype;
Employee.prototype.calcSalary = function(){
    return this.salary*12;
}

Employee.prototype.empDetails =function(){
    console.log(this.name);
    console.log(this.empId);
}

// Employee.prototype = Person1.prototype; Intialize copy the prototype
let kumar = new Employee('Kumar','Male',2000,'001',20000);
console.log(kumar);