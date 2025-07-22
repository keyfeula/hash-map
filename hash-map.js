import { createLinkedList } from "./linked-list.js";

function createHashMap(loadFactor = 0.8, capacity = 16) {
    const array = new Array(capacity).fill(null);

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
            let index = hash(key);
            if (array[index] === null) {
                array[index] = createLinkedList();
                array[index].appendNode(key, value);
            }
            else {
                let valueChanged = false;
                let bucketSize = array[index].getSize();
                let node = array[index].getListHead();
                for (let i = 0; i < bucketSize; i++) {
                    if (node.getKey() === key) {
                        node.setValue(value);
                        valueChanged = true;
                    }
                    node = node.getNext();
                }
                if (!valueChanged) {
                    array[index].appendNode(key, value);
                }
            }
        },
        printBuckets() {
            for (let i = 0; i < array.length; i++) {
                if (array[i] !== null) {
                    array[i].printList();
                }
                else {
                    console.log(array[i]);
                }
            }
        }
    }
}

let map = createHashMap();
map.set("han", "blaster");
map.set("obi", "lightsaber");
map.set("luke", "lightsaber");
map.set("han", "none");
map.printBuckets();