function createHashMap(loadFactor = 0.8, capacity = 16) {

    let size = 0;
    const array = new Array(capacity);
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
        clear() {
            for (let i = 0; i < array.length; i++) {
                array[i] = new Array(0);
            }
            size = 0;
        },
        printBuckets() {
            console.log(array);
        }
    }

}

let map = createHashMap();
map.set("key", "123");
map.set("red", "h2d");
map.set("oak", "339");
map.set("key", "f9d");
map.set("misty", "water");
map.set("brock", "eart4");
map.remove("oak");
map.remove("pk");
map.clear();
console.log("size: " + map.getLength());
map.printBuckets();