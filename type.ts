

const isFetching: boolean = true;

const int: number = 42;



const num: number = 3e412222;


const numArray: number[] = [1,1,2,3,5,8]

const numArray2: Array<number> = [1,1,2,3,5,8]


const contact: [string, number] = ['vitaliy', 123213];




let variable: any = 42;

variable = 'stroke';

function und (): void{
    return console.log('sdasd');
}


function nev(): never {
    throw new Error();
}

function inf(): never {
    while(true){

    }
}

type someType = string | null | undefined| void


function someFunction (): someType{
    
}


const count:number = 5;
const isFail:boolean = false;
const say:string = 'hello all';
const randomCounts:number[] = [2,2,32131,12,3,313,21];
const voidArray:[] = [];
let cards: [string, number] = ['vitaliy', 2727];

enum colors {
    red,
    black,
    green
}

let background: colors = colors.red;

function testObject(t: object | null):void {};
testObject({name: 'test'});

let someValue:string = 'this string';
let strLength: number = (someValue).length;


let tuple: [number, string, boolean, any] = [7, "hello", true, 123];

let [a, b, c, ...sd] = tuple;