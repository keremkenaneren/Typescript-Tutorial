/*

! TYPESCRİPT TUTORIAL - INTRODUCTION

 */
// console.log("HelloWorld")
//! data type
var firstName = "Kerem Kenan";
var lastName = "Eren";
var age = 17;
var zero = 0;
var octal = 255;
var binary = 25;
var hexadecimal = 0x37fc;
var bool = true;
function deneme(name, age) {
    console.log("".concat(name, " - ").concat(age));
}
//! array
var names = ["kerem", "kenan", "eren", "ahmet", "mustafa"];
var colors = ["blue", "brown", "red", "yellow", "darkblue", "green"];
var informations = ["james", 23, "little", "someone else", 45, 46, 47, "passwords", 104735, "secrets people"];
var ages = [12, 13, 14, 18, 23, 39, 61];
//! tuple
var info = ["Can", 19];
var employee;
employee = [["kerem", 18, true], ["ahmet", 12, false], ["mehmet", 9, false], ["muzaffer", 34, true]];
var member;
member = {
    firstName: "Kerem",
    lastname: "Eren",
    age: 18,
    department: "Computer eng",
    control: true
};
// console.log(member)
//!  ENUM
var numeric;
(function (numeric) {
    numeric[numeric["kerem"] = 0] = "kerem";
    numeric[numeric["kenan"] = 1] = "kenan";
    numeric[numeric["eren"] = 2] = "eren";
})(numeric || (numeric = {}));
// console.log(numeric.kenan);
var words;
(function (words) {
    words["paper"] = "kagit";
    words["newspaper"] = "gazete";
    words["novel"] = "roman";
})(words || (words = {}));
// console.log(words.newspaper);
// console.log(words["novel"]);
//! UNION
var code = "123";
//! ANY
var anyword;
anyword = "kerem";
anyword = 123;
anyword = true;
//! void
function sayHello() {
    console.log("hello");
    // void döndürüyor
}
//! Never
function throwError(error) {
    throw new Error(error);
}
// throwError("HATA!!!!!!!")
//!  TERNARY 
var x = 10;
var y = 5;
x > y ? console.log("x y'den büyük") : console.log("x y'den küçük");
//! For loop
for (var i = 0; i < 2; i++) {
    console.log("i degeri : ".concat(i));
}
console.log("---------------------------");
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
console.log("---------------------------");
//! optional parameters
function carpim(a, b, c) {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
// console.log(carpim(3,2));
var topla = function (a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// console.log(topla(2,2));
//! Rest parameters
function toplam() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
// console.log(toplam(10,10,10));
// console.log(toplam(10));
var Human = /** @class */ (function () {
    function Human(id, firstname, lastname) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Human.prototype.getFullName = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    return Human;
}());
var newHuman = new Human(1, "Kerem Kenan", "Eren");
function getFullName(aperson) {
    return "".concat(aperson.name, " ").concat(aperson.surname);
}
var aperson = {
    name: "Kerem Kenan",
    surname: "Eren"
};
// console.log(getFullName(aperson));
