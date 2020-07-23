


interface Person{
    name: string
    age: number
}


type PersonKeys = keyof Person


let myName: PersonKeys = 'age'

myName = 'name';