import EventEmitter from 'events';
import fs from 'fs';
import readline from 'readline';
import { Calculator } from './calculator';

let calculator = new Calculator;

const eventEmitter = new EventEmitter();

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('./03_TS_events_promises/task_events/input.txt'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      let numbers: string[] = line.split(' ')
      let [firstParamenter, secondParameter, operation] = numbers;

      function myEvent(event: string, method: any): void {
        eventEmitter.on(event, method)
        eventEmitter.emit(event, +firstParamenter, +secondParameter)
        eventEmitter.off(event, method)
      }

      switch (operation) {
        case "+":
          myEvent('sum', calculator.sum)
          break;
        case "-":
          myEvent('substract', calculator.subtract)
          break;
        case "/":
          myEvent('divide', calculator.divide)
          break;
        case "*":
          myEvent('multiply', calculator.multiply)
          break;
        case "%":
          myEvent('remainder', calculator.remainder)
          break;
        default:
          throw new Error('Operation is not defined')
      }
    });

  } catch (err) {
    console.error(err);
  }
})();