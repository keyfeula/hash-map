import { createNode } from "./node.js";

export function createLinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    return {
        appendNode(key, value) {
            let node = createNode(key, value);
            if (head === null && tail === null) {
                head = node;
                tail = node;
            }
            else {
                tail.setNext(node);
                tail = node;
            }
            size++;
        },
        getSize() {
            return size;
        },
        setHead(newHead) {
            head = newHead;
        },
        setTail(newTail) {
            tail = newTail;
        },
        getListHead() {
            return head;
        },
        getListTail() {
            return tail;
        },
        printList() {
            let node = head;
            let result = "";
            for (let i = 0; i < size; i++) {
                result += `{key: ${node.getKey()}, value: ${node.getValue()}} --> `;
                node = node.getNext();
            }
            result += "null";
            console.log(result);
        }
    }
}