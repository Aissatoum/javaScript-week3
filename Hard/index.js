'use strict'
function Person(){
        let pii = {
            name: 'John Smith',
            age:25,
            email:'Johnsmith@aol.com',
            ssn: 237890651
            };
            return {
            getName(){
           return pii.name;
        },
        getAge(){
            return pii.age;
         },
        getEmail(){
            return pii.email;
        },
    }
    };

let person = Person();
    console.log(person.getName());
    console.log(person.getAge());
    console.log(person.getEmail());
    console.log(Person());