let user = {
    name: "Ivan",
}

let admin = {
     __proto__: user, // скрытое св-во, мы задали объекту админ
};

console.log(admin.name);

function CreateUser(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log("Меня зовут:" + this.name); //  внутри метада обязательно ссылаемся на this
    }
}

let firstUser = new CreateUser("Ivan", 21); // {name: "Ivan", age: 21}
let secondUser = new CreateUser("Alex", 18); // {name: "Alex", age: 18}

console.log(firstUser);
console.log(secondUser);