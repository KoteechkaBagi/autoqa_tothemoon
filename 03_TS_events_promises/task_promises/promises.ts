let mySymbols: string[] = ['|', '/', '-', '\\']

async function loader(times: number) {
    for(let i = 0; i < times; i++) {
        process.stdout.write(`\r${mySymbols[i%mySymbols.length]}`)
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
    process.stdout.write(`\rLoading is completed!`)
}

loader(7)


