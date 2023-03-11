export class Calculator {

    constructor(){}

    public sum (first: number, second: number) : number {
        return +first + +second;
    }

    public subtract (first: number, second: number) : number {
        return first - second;
    }

    public multiply (first: number, second: number) : number {
        if (first < 0 && second === 0) {
            return Math.abs(first * second)
        } else {
            return first * second;
        }  
    }

    public devide (first: number, second: number) : number {
        if (second) {
            return first/second;
        } else {
            throw Error ("You can't devide by zero")
        }
    }

    public remainder (first: number, second: number) : number {
        return first % second
    }

}