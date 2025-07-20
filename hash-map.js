function createHashMap(loadFactor = 0.8, capacity = 16) {
    return {
        hash(key) {
            let hashCode = 0;
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = primeNumber * hashCode + key.charCodeAt(i);
                hashCode = hashCode % capacity;
            }
            return hashCode;
        },

    }
}

let map = createHashMap();
console.log(map.hash("keyydfsdfv"));