class Person {
    constructor(name,job,age){
       this.name= name;
       this.job = job;
       this.age= age; 
    }
     exercise() {
       console.log('You are doing great!!');
     }
     fetchJob() {
       console.log(`${this.name} is a ${this.job}.`);
     }
   }
   let person = new Person('Olivia','Lawyer', 27);
   person.exercise();
   person.fetchJob();
   //Constructor Programmer
   class Programmer extends Person{
   constructor(name,job,age,languages){
       // super calls the parent
       super(name, job, age);
       this.languages = languages;
       this.busy = true;
   }
   completeTask(){
       this.busy = false;
   }
   acceptNewTask(){
       this.busy = true;
   }
   offerNewTask(){
       if(this.busy){
           console.log(`${this.name} can not accept anymore jobs right now`);
       }else {
           console.log(`${this.name} would love to take a new  responsibility.`)
       }
   }
   learnLanguage(newLang){
       this.languages.push(newLang);
   }
   listLanguages(){
       console.log(this.languages);
   }
   }
   var person2 = new Programmer('Liza', 'Teacher', 22, ['Javascript']);
   console.log(person2.busy);
   person2.completeTask();
   console.log(person2.busy);
   person2.acceptNewTask();
   console.log(person2.busy);
   person2.completeTask();
   person2.offerNewTask();
   console.log(person2.languages);
   person2.learnLanguage('Python');
   person2.listLanguages();
   
   