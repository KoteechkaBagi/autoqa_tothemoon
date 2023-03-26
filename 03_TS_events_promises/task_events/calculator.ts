export class Calculator {

    constructor(){}

    public sum (first: number, second: number) : void {
        let result = first + second
        console.log(`${first} + ${second} = ${result}`);
    }

    public subtract (first: number, second: number) : void {
        let result = first - second
        console.log(`${first} - ${second} = ${result}`);
    }

    public multiply (first: number, second: number) : void {
        let result: number;
        if (first < 0 && second === 0) {
            result = Math.abs(first * second)
        } else {
            result = first * second;
        }
        console.log(`${first} * ${second} = ${result}`);
    }

    public divide (first: number, second: number) : void {
        let result: number;
        if (second) {
            result = first/second;
        } else {
            throw Error ("You can't devide by zero")
        }
        console.log(`${first} / ${second} = ${result}`); 
    }

    public remainder (first: number, second: number) : void {
        let result = first % second
        console.log(`${first} % ${second} = ${result}`); 
    }

}