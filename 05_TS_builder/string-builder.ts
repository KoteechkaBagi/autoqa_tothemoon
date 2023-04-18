class Builder {
    build() {
        throw new Error('Never use super.build()');
    }
}

export class StringBuilder extends Builder {
    constructor(private resultString: string = '') {
        super();   
    }

    public append(str: string) : this {
        this.resultString += str
        return this
    }

    public insert(index : number, str : string) : this {
        let arr = this.resultString.split('');
        if(index <= arr.length) {
            arr.splice(index + 1, 0, str);
            this.resultString = arr.join('');
        } else {
            throw new Error('You entered incorrect index')
        }
        return this
    }

    public delete(from : number, to : number) : this {
        let arr = this.resultString.split('');
        if(to >= from && to <= arr.length) {
            arr.splice(from, (to - from + 1));
            this.resultString = arr.join('');
        } else {
            throw new Error('You entered incorrect index')
        }
        return this
    }

    public reset() : this {
        this.resultString = ''
        return this
    }

    public build() : string {
        return this.resultString
    }
}

