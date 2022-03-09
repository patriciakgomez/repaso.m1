function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
}
BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
        if (this.left === null) {
            var newTree = new BinarySearchTree(value);
            this.left = newTree;
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            var newTree = new BinarySearchTree(value);
            this.right = newTree;
        } else {
            this.right.insert(value);
        }
    }
};

let bst = new BinarySearchTree(7);
bst.insert(2);
bst.insert(9);
bst.insert(1);
bst.insert(5);
bst.insert(14);

function bubbleSort (array) {
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-1-j; j++){
            if (array[j]>array[j+1]){
                let aux=array[j];
                array[j]=array[j+1];
                array[j+1]=aux;
            }
        }
    }
    return array;
}

BinarySearchTree.prototype.getLeafs = function () {
    var array = [];
    if (this.left){
        if (!this.left.left&&!this.left.right){
            array.push(this.left.value); 
        } else{
            array=array.concat(this.left.getLeafs());
        }
    }
    if (this.right){
        if (!this.right.left&&!this.right.right){
            array.push(this.right.value); 
        } else{
            array=array.concat(this.right.getLeafs());
        }
    }

    return bubbleSort(array);
};

//Guarda todos los nodos en un array y lo retorna ordenado de menor a mayor
/*BinarySearchTree.prototype.getLeafs = function () {
    var array = [];
    if (this.left) array=array.concat(this.left.getLeafs());
    if (this.right) array=array.concat(this.right.getLeafs());
    function bubbleSort(array) {
        for(let i=0; i<array.length; i++){
            for(let j=0; j<array.length-1-j; j++){
                if (array[j]>array[j+1]){
                    let aux=array[j];
                    array[j]=array[j+1];
                    array[j+1]=aux;
                }
            }
        }
        return array;
    }
    return bubbleSort(array);
};*/

bst.getLeafs();