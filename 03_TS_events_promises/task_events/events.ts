import events from 'events';
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
      let numbers = line.split(' ')
      let operation: string = numbers[2]
      let result: number = 0;
      switch (operation) {
        case "+":
            result = calculator.sum(+numbers[0], +numbers[1])
            break;
        case "-":
            result = calculator.subtract(+numbers[0], +numbers[1])
            break;
        case "/":
            result = calculator.devide(+numbers[0], +numbers[1])
            break;
        case "*":
            result = calculator.multiply(+numbers[0], +numbers[1])
            break;
        case "%":
            result = calculator.remainder(+numbers[0], +numbers[1])
            break;
        default:
            break;
      }
      console.log(`${numbers[0]} ${numbers[2]} ${numbers[1]} = ${result}`)
    });

    await events.once(rl, 'close');

  } catch (err) {
    console.error(err);
  }
})();