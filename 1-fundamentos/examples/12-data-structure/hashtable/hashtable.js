class Hashtable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        // El hash se volvera en la direccion
        const address = this.hashMethod(key);
        console.log(address);
        if (!this.data[address]) { // para evitar la colision en hashTable
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    let deleteBucket = currentBucket[i];
                    delete currentBucket[i];
                    currentBucket.splice(i, 1)
                    return deleteBucket;
                }
            }
        }
        return undefined;
    }

    getAllKeys() {
        let keys = [];
        this.data.forEach(arrays => {
            if (arrays) {
                for (let i = 0; i < arrays.length; i++) {
                    keys.push(arrays[i][0]);
                }
            }
        });
        return keys;
    }
}

const user = new Hashtable(50);
user.set('Sergio', 1987);
user.set('Sergio', 1987);
user.set('Rocio', 1988);
user.set('Daniel', 1987);
console.log(user);
console.log(user.get('Sergio'));
//console.log(user.delete('Sergio'));
console.log(user);

console.log(user.getAllKeys());