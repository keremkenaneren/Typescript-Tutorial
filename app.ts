/*

! TYPESCRİPT TUTORIAL - INTRODUCTION

 */

// console.log("HelloWorld")

//! data type
let firstName :string = "Kerem Kenan"
let lastName :string = "Eren"
let age :number = 17
let zero :number = 0
let octal :number = 0o377
let binary :number = 0b11001
let hexadecimal :number = 0x37fc
let bool :boolean = true

function deneme(name:string, age:number) : void{
    console.log(`${name} - ${age}`)
}

//! array
let names:string[] = ["kerem","kenan","eren","ahmet","mustafa"]
let colors:Array<string> = ["blue","brown","red","yellow","darkblue","green"]
let informations:Array<string | number> = ["james",23,"little","someone else",45,46,47,"passwords",104735,"secrets people"]
let ages:Array<number> = [12,13,14,18,23,39,61]

//! tuple
let info:[string, number] = ["Can",19]
let employee:[string, number, boolean][];
employee = [["kerem",18,true],["ahmet",12,false],["mehmet",9,false],["muzaffer",34,true]]


//! Object
type Person = {
    //such as interface
    firstName: string,
    lastname: string,
    age: number,
    department: string,
    control: boolean
};

let member: Person;

member = {
    firstName: "Kerem",
    lastname: "Eren",
    age: 18,
    department: "Computer eng",
    control: true
}

// console.log(member)

//!  ENUM

enum numeric {
    kerem, 
    kenan,
    eren
}

// console.log(numeric.kenan);


enum words {
    paper = "kagit",
    newspaper = "gazete",
    novel = "roman"
}

// console.log(words.newspaper);
// console.log(words["novel"]);

//! UNION
let code : string | number = "123"

//! ANY
let anyword : any;

anyword = "kerem"
anyword = 123
anyword = true


//! void
function sayHello() :void{
    console.log("hello");
    // void döndürüyor
    
}

//! Never
function throwError(error:string) :never{
    throw new Error(error);
}

// throwError("HATA!!!!!!!")

//!  TERNARY 
let x :number = 10
let y :number = 5

x>y ? console.log("x y'den büyük") : console.log("x y'den küçük")

//! For loop
for (let i = 0; i < 2; i++) {
    console.log(`i degeri : ${i}`);
    
}
console.log("---------------------------");


let arr = [1,2,3,4,5]

for(let item of arr){
    console.log(item);
}
console.log("---------------------------");


//! optional parameters
function carpim(a:number,b:number,c?:number){
    if(c !== undefined){
        return a*b*c;
    }

    return a*b
}

// console.log(carpim(3,2));

let topla = (a:number,b:number,c?:number)=>{
    if (c !== undefined) {
        return a+b+c;  
    }

    return a+b
}

// console.log(topla(2,2));

//! Rest parameters
function toplam(...numbers: number[]){
    let total=0;
    numbers.forEach((num)=>total += num)
    return total;
}

// console.log(toplam(10,10,10));
// console.log(toplam(10));

class Human{
    readonly id:number;
    public firstname:string;
    public lastname:string;

    constructor(id:number,firstname:string,lastname:string){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}

const newHuman = new Human(1,"Kerem Kenan","Eren")
// console.log(newHuman);
// console.log(newHuman.getFullName());


// -------------------------------------------

//  Interface
interface aPerson{
    name : string,
    surname : string
}

function getFullName(aperson: aPerson){
    return `${aperson.name} ${aperson.surname}`;
}

let aperson = {
    name:"Kerem Kenan",
    surname:"Eren"
}
// console.log(getFullName(aperson));
