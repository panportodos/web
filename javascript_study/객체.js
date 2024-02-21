//자바스크립트 객체 형태 = {key: value, key: value}
let student = {
    name: "김준일",
    age: 31
}

console.log(typeof(student));
console.log(student.name);

class Student {
    name;
    age;

    //생성자
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

let s = new Student("김준이",32);
// s.name = "김준이";
// s.age = 32;
console.log(s);

class User {
    #username;//멤버 변수명 앞에 #을 붙이면 private이 된다
    password;

    set setUsername(username) { // 세터
        this.#username = username;
    }
    get username() { // 게터
        return this.#username;
    }
}

let user = new User();
user.setUsername = "junil"; //세터를 변수처럼 대입 - javascript라서 가능
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "junil");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("password"));