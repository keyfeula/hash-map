export function createNode(key = null, value = null) {
    let next = null;

    return {
        setNext(nextNode) {
            next = nextNode;
        },
        setValue(newValue) {
            value = newValue;
        },
        setKey(newKey) {
            key = newKey;
        },
        getKey() {
            return key;
        },
        getNext() {
            return next;
        },
        getValue() {
            return value;
        }
    }
}