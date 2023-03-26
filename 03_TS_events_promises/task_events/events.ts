import { eventEmitter } from './event_emitter';
import fs from 'fs';
import readline from 'readline';
import { Calculator } from './calculator';
import Mocha from 'mocha';
import 'ts-mocha';

const mocha = new Mocha();
mocha.addFile('./03_TS_events_promises/task_events/tests.ts');

let calculator = new Calculator;

const rl = readline.createInterface({
  input: fs.createReadStream('./03_TS_events_promises/task_events/input.txt'),
  crlfDelay: Infinity
});

(async function processLineByLine() {
  try {
    rl.on('line', (line) => {
      let numbers: string[] = line.split(' ')
      let [firstParamenter, secondParameter, operation] = numbers;

      switch (operation) {
        case "+":
          eventEmitter.emit('sum', calculator, +firstParamenter, +secondParameter)
          break;
        case "-":
          eventEmitter.emit('subtract', calculator, +firstParamenter, +secondParameter)
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
    rl.on('close', () => {
      mocha.run((failures) => {
        process.on('exit', () => {
          process.exit(failures);
        });
      });
    });
  } catch (err) {
    console.error(err);
  }
})();

export default rl;