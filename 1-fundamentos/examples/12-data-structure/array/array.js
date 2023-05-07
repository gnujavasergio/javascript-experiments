class SysCodeArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    unshift(item) {
        if (!item) {
            return this.length
        }
        let newData = {};
        for (let i = 0; i < this.length; i++) {
            newData[i + 1] = this.data[i];
        }
        this.data = newData;
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    // unshift(item) {
    //     if (!item) {
    //         return this.length
    //     }
    //     if (this.length !== 0) {
    //         for (let i = this.length - 1; i >= 0; i--) {
    //             this.data[i + 1] = this.data[i];
    //         }
    //     }
    //
    //     this.data[0] = item;
    //     this.length++;
    //     return this.length;
    // }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const item = this.data[0];
        this.shiftIndex(0);
        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const array = new SysCodeArray();
array.push('Martes');
array.push('Miercoles');
array.push('Jueves');
array.push('Domingo');
console.log(array.data);
console.log(array.pop());
console.log(array.data);
console.log(array.unshift("Lunes"));
console.log(array.unshift("hola"));
console.log(array.data);
console.log(array.shift());
console.log(array.data);

