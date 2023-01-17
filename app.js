
// let user = {
//     name: "Ivan",
// }

// let admin = {
//      __proto__: user, // скрытое св-во, мы задали объекту админ
// };

// console.log(admin.name);

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function() {
//         console.log("Меня зовут:" + this.name); //  внутри метада обязательно ссылаемся на this
//     }
// }

// CreateUser.prototype.sayHi = function() {
//     console.log("Меня зовут:" + this.name);
// }

// let firstUser = new CreateUser("Ivan", 21); // {name: "Ivan", age: 21}
// let secondUser = new CreateUser("Alex", 18); // {name: "Alex", age: 18}

// console.log(firstUser);
// console.log(secondUser);

// firstUser.sayHi();
// secondUser.sayHi();



// function CreateCard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function() {
//         console.log(`От ${this.from}, кому ${this.to}`);
//     }
// }

// CreateCard.prototype.setFrom = function(from) {
//     this.from = from;
// }

// const cardOne = new CreateCard('Иван', 'Анна');
// cardOne.setFrom('Олег');
// cardOne.show();


// классы
// class Parent {
//     constructor(name) {
//         this.name = name:
//     };
//     sayHi() {
//         console.log("Меня зовут:" + this.name);
//     };
// }

// class Animal{ 
//     constructor(name, color, weight){
//         this.name = name;
//         this.color = color;
//         this.weight = weight;
//     }
//     say(){
//         console.log(`${this.name} издает звуки`);
//     }
// }

// class Dog extends Animal{ //позволяет вызвать конструктор родителя 
//     constructor(name, color, weight, breed){
//         super(name, color, weight);
//         this.breed = breed;
//     }
//     say (){
//         console.log(`${this.name} говорит гав`);
//     }
// }

// const DogOne = new Dog('Беляш', 'Черная', '2', 'Такса');
// console.log(DogOne);

// DogOne.say();

// class Cat extends Animal{
//     constructor(params, breed){
//         super(params);
//         this.breed = breed;
//     }
//     say(){
//         console.log('Мяу');
//     }
// }

// class Lion extends Cat{
//     constructor(params, breed) {
//         super() // посмотреть в видео с занятий и поменят на params
//     }
//     growl {
//         console.log('Рычать');
//     }
// }

// const propsForLion = {
//     name: 'Алекс',
//     color: 'Коричневый',
//     weight: '250000',
// }

// const LionOne = new Lion(propsForLion, 'Африканский')

class User {
    constructor(name) {
        this._name = name;
        this._surname = surname;
    }
    get name() { return this._name + " пользователь";}
    set name(value) {
        // if (value.length < 2) {
        //     alert('Имя слишком короткое');
        //     return;
        // }
        // this._name = value; 
        get fullName(FullName){
            return `${this._name} ${this._surname}`
        }
        
    }
    set fullName(fullName){
        const name = fullName.split(' ');
        this._name = name[0];
        this._surname = name[1];
    }
    get age(){
        const now = dayjs();
        return now.diff(this._birthdate, 'year'); //передает возраст
    }
    set birthdate(birthdate) {
        this._birthdate = birthdate;
    }
}


class People {
    constructor(name) {
        this.name = name;
        this.surname = this.surname;
    }
    get name() {return this._name + "пользователь";}
    set name(value) {
        getFullName(fullName){
            return `${this._name} ${this._surname}`
        }
    }
    set fullName(fullName){
        const name = fullName.split(' ');
        this._name = name[0];
        this._surname = name[1];
    }
}

class Worker extends People {
    constructor(name, surname){
        super(name, surname);
        this.rate = rate;
        this.day = day;
    }
}




const userOne = new User('Иван', 'Иванов');
userOne.birthdate = '1999-02-01';
userOne.fullName = 'Петр Петров';

console.log(userOne.name);