let mySymbols: string[] = ['|', '/', '-', '\\']

async function loader(times: number) {
    for(let i = 0; i < times; i++) {
        process.stdout.write(`\r${mySymbols[i%mySymbols.length]}`)
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
    process.stdout.write(`\rLoading is completed!`)
}

loader(7)

//Using recursion

/* let mySymbols: string[] = ["|", "/", "-", "\\"];
let currentIndex: number = 0;

async function loader(times: number) {
  if (!times) {
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
      process.stdout.write(`\rLoading is completed!`);
    });
  }
  return new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
    process.stdout.write(`\r${mySymbols[currentIndex++ % mySymbols.length]}`);
    loader(--times);
  });
} */


