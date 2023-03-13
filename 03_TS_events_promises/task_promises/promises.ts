let mySymbols: string[] = ['|', '/', '-', '\\']

async function loader(times: number) {
    for(let n = 0; n < times; n++) {
        for(let i = 0; i < mySymbols.length; i++) {
            process.stdout.write(`\r${mySymbols[i]}`)
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    }
    process.stdout.write(`\rLoading is completed!`)
}

loader(5)

