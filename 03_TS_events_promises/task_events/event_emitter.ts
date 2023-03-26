import EventEmitter from 'events';
import sinon from 'ts-sinon';
import { Calculator } from './calculator';

export const sumSpy = sinon.spy();
export const subtractSpy = sinon.spy();
export const divideSpy = sinon.spy();
export const multiplySpy = sinon.spy();
export const remainderSpy = sinon.spy();

export const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    sumSpy();
    calculator.sum(firstParameter, secondParameter)
})

eventEmitter.on('subtract', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    subtractSpy();
    calculator.subtract(firstParameter, secondParameter)
})

eventEmitter.on('divide', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    divideSpy();
    calculator.divide(firstParameter, secondParameter)
})

eventEmitter.on('multiply', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    multiplySpy()
    calculator.multiply(firstParameter, secondParameter)
})

eventEmitter.on('remainder', (calculator: Calculator, firstParameter: number, secondParameter: number) => {
    remainderSpy()
    calculator.remainder(firstParameter, secondParameter)
})