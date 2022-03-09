function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
    return this.array.shift();
};

Queue.prototype.size = function () {
    return this.array.length;
};

Queue.prototype.isEmpty = function () {
    return this.size() === 0;
};

Queue.prototype.reverseStack = function () {
    var queue = new Queue();
    while (this.isEmpty()===false) {
        queue.enqueue(this.array.pop());
    }
    return queue;
};

stack = new Queue();
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);
stack.enqueue(4);