


class TypeScript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string): string{
        return ' '
    }
}


class Car {
    readonly model: string
    readonly numberOfweels: number = 4

    constructor(theModel: string){
        this.model = theModel
    }
}

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go(){
        console.log('GO');
        
    }
}


class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat();


abstract class Component {
    abstract render(): void
    abstract info(): string 
}


class AppComponent extends Component{
    render(): void {
        console.log('Component on render');
    }
    info(): string {
        return 'this string'
    }
}
