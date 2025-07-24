function createHashMap(loadFactor = 0.75, capacity = 16) {

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

    function growArray() {
         {  
                for (let i = 0; i < array.length; i++) {
                    let bucket = array[i];
                    for (let j = 0; j < bucket.length; j++) {
                        remove(bucket[j].key);
                    }
                }

                for (let i = size; i < capacity - 1; i++) {
                    array[i] = new Array(0);
                }
            }
    }

    return {
        set(key, value) {
            console.log("key: " + key + " hash: " + hash(key));
            let bucket = array[hash(key)];
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i].key === key) {
                    bucket[i].value = value;
                    return;
                }
            }
            
            if (size / capacity >= loadFactor) {
                growArray();
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
        printEntries() {
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
map.set("gary", "normal");
map.set("cyrus", "poison");
map.set("gary", "normal");
map.set("person1", "normal");
map.set("person2", "normal");
map.set("person3", "normal");
map.set("person4", "normal");
map.set("person5", "psychic");
map.set("person6", "water");
map.set("person7", "water");
map.set("person8", "water");
map.set("person9", "water");
map.set("person10", "water");
//map.set("key", "fire");
//map.set("gary", "flying");
//map.remove("oak");
map.set("brock", "rock");
//map.clear();
console.log("size: " + map.getLength());
console.log("keys: " + map.getKeys());
console.log("values: " + map.getValues());
map.printEntries();