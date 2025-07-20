function createHashMap(loadFactor = 0.8, capacity = 16) {
    const array = new Array(capacity).fill(new Array());

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
            array[hash(key)] = { key, value };
        },
        get(key) {
            return array[hash(key)].value;
        }
    }
}

let map = createHashMap();
map.set("key", "hello");
console.log(map.get("key"));