
interface Rect {
    readonly id: string | number
    color?: string
    size: {
        width: number,
        heigth: number
    }
};

const rect1: Rect = {
    id: 12,
    size: {
        width: 20,
        heigth: 20
    },
    color: 'ccc'
}

// ===================================

interface RectWitherArea extends Rect {
    getArea: ()=> number
}

const react5: RectWitherArea = {
    id: '21312',
    size: {
        width: 12,
        heigth: 44
    },
    getArea: ()=>{
        return this.size.width
    }
}

// ======================================

interface Styles {
    [key: string]: string

}

const css: Styles = {
    border: '1px solid #000'
}