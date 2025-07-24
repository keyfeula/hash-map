function createHashMap(loadFactor = 0.75, capacity = 16) {

    let size = 0;
    let array = new Array(capacity);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(0);
    }

    function hash(key) {
        let hashCode = 0;
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = primeNumber * hashCode + key.charCodeAt(i);
                hashCode = hashCode % capacity;
            }
            return hashCode;
    }

    return {
        set(key, value) {
            let bucket = array[hash(key)];
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i].key === key) {
                    bucket[i].value = value;
                    return;
                }
            }
            
            if (size / capacity >= loadFactor) {
                this.growArray();
            }
            bucket.push({ key, value });
            size++;
            return;
        },
        get(key) {
            let bucket = array[hash(key)];
            for (let i = 0; i < bucket.length; i++) {
                if (key === bucket[i].key) {
                    return bucket[i].value; 
                }
            }
            return null;
        },
        remove(key) {
            if (this.get(key) === null) {
                return false;
            }
            else {
                let bucket = array[hash(key)];
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i].key === key) {
                        bucket.splice(i, 1);
                        size--;
                        return true;
                    }
                }
            }
        },
        getLength() {
            return size;
        },
        getKeys() {
            let keys = [];
            for (let i = 0; i < array.length; i++) {
                let bucket = array[i];
                for (let j = 0; j < bucket.length; j++) {
                    keys.push(bucket[j].key);
                }
            }
            return keys;
        },
        getValues() {
            let values = [];
            for (let i = 0; i < array.length; i++) {
                let bucket = array[i];
                for (let j = 0; j < bucket.length; j++) {
                    values.push(bucket[j].value);
                }
            }
            return values;
        },
        clear() {
            for (let i = 0; i < array.length; i++) {
                array[i] = new Array(0);
            }
            size = 0;
        },
        growArray() {
            let entries = this.getEntries();
            capacity *= 2;
            array = new Array(capacity);
            this.clear();
            for (entry of entries) {
                console.log(entry);
                this.set(entry[0], entry[1]);
            }
        },
        getEntries() {
            let values = this.getValues();
            let keys = this.getKeys();
            let result = [];
            for (let i = 0; i < keys.length; i++) {
                result.push([keys[i], values[i]]);
            }
            return result;
        },
        printEntries() {
            console.log(array);
        }
    }

}