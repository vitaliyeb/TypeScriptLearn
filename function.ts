
function add( a: number, b: number): number{
    return a + b;
}


function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface myDefinePosition extends MyPosition {
    default: string
}

function position(): MyPosition

function position(a: number): myDefinePosition

function position(a: number, b: number): MyPosition

function position( a?: number, b?: number){
    if(!a && !b) return { x: undefined, y: undefined }
    if(a && !b) return { default: 'not defined b', x: undefined, y: undefined }
    return {x: a, y: b}
}

console.log(position());
console.log(position(21));
console.log(position(12, 45));
