import { eventEmitter } from './event_emitter';
import fs from 'fs';
import readline from 'readline';
import { Calculator } from './calculator';

let calculator = new Calculator;

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('./03_TS_events_promises/task_events/input.txt'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      let numbers: string[] = line.split(' ')
      let [firstParamenter, secondParameter, operation] = numbers;

      switch (operation) {
        case "+":
          eventEmitter.emit('sum', calculator, +firstParamenter, +secondParameter)
          break;
        case "-":
          eventEmitter.emit('substract', calculator, +firstParamenter, +secondParameter)
          break;
        case "/":
          eventEmitter.emit('divide', calculator, +firstParamenter, +secondParameter)
          break;
        case "*":
          eventEmitter.emit('multiply', calculator, +firstParamenter, +secondParameter)
          break;
        case "%":
          eventEmitter.emit('remainder', calculator, +firstParamenter, +secondParameter)
          break;
        default:
          throw new Error('Operation is not defined')
      }
    });

  } catch (err) {
    console.error(err);
  }
})();