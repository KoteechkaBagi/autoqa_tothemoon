import EventEmitter from 'events';
import { Calculator } from './calculator';

export const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    calculator.sum(firstParameter, secondParameter)
})

eventEmitter.on('substract', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    calculator.substract(firstParameter, secondParameter)
})

eventEmitter.on('divide', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    calculator.divide(firstParameter, secondParameter)
})

eventEmitter.on('multiply', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    calculator.multiply(firstParameter, secondParameter)
})

eventEmitter.on('remainder', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    calculator.remainder(firstParameter, secondParameter)
})