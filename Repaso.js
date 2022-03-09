// Ir pusheando el repo cada tanto por si surge algun problema con la computadora.
// Tomarse un tiempo de descanso entre cada ejercicio.
// Estar tranquilos es clave, tienen las homeworks como guia.
// Si se traban con uno, pasar al siguiente.
// Esto es un simulacro, puede que este repaso sea mas dificil o mas facil que el propio Checkpoint!!!
// Amigarse del console.log() es clave para saber que nos va devolviendo cada variable y/o funcion.
// Leer lo que nos llega por consola!! Tanto errores como console.log() para darse cuenta que esta bien o que esta mal.

// Importamos las clases:
const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');

// Se incluyen los siguientes metodos para las estructuras de datos importadas.
// QUEUE -- enqueue -- dequeue -- size -- isEmpty
// LINKED LIST -- add -- remove -- print
// BINARY SEARCH TREE -- insert -- size -- contains -- breadthFirstForEach

/*****************************************************************/
/************************** Linked List **************************/
/*****************************************************************/

// Ejercicio A.
// Implementar los siguientes metodos para una linked list ya implementada.
// Ejemplo: head -> 12 -> 15 -> 16 -> 10 -> 2 -> null
// getHead() ---> Devuelve el primer nodo de la linkd list.
// myLinkedList.getHead() ---> devuelve 12.
// getTail() ---> Devuelve el ultimo nodo de la linked list.
// myLinkedList.getTail() ---> devuelve 2.
// search(value) ---> Devuelve la posicion del nodo con el valor recibido por parametro, contando desde 0.
// myLinkedList.search(16) ---> devuelve 2.

LinkedList.prototype.getHead = function () {
    return this.head.value
};

LinkedList.prototype.getTail = function () {
    var current=this.head;
    while (current.next){
        current=current.next
    }
    return current.value
}

LinkedList.prototype.search = function (value) {
    var current=this.head, pos=0;
    if (current.value===value) return pos;
    while (current.next){
        current=current.next;
        pos++;
        if (current.value===value) return pos;
    }   
};

/*****************************************************************/
/*************************** Recursion ***************************/
/*****************************************************************/

// Ejercicio B.
// Implementar una funcion que retorne true o false si el numero pasado por parametro es palindromo.
// Controlar que el numero pasado por parametro sea mayor que 0,
// de lo contrario devolver false.
// Palindromo es una expresion que se lee igual de derecha a izquierda o viceversa.
// Ejemplo de numeros palindromos: 1001, 252, 2001, 2222, 9889.

function isPalindrome(number) {
    if (number<=0) return false;
    number=number.toString()
    var vice=number.split("").reverse().join("")
    if(vice===number){
        return true;
    } else{
        return false;
    }
}

/*****************************************************************/
/*********************** Recursion y Stack ***********************/
/*****************************************************************/

// Ejercicio C.
// Implementar una funcion que revierta los valores de una stack (pila).
// Ejemplo:
// 1 <- TOP
// 2
// 3
// 4
//
// Resultado:
// 4 <- TOP
// 3
// 2
// 1

Queue.prototype.reverseStack = function () {
    var queue = new Queue();
    while (this.isEmpty()===false) {
        queue.enqueue(this.array.pop());
    }
    return queue;
};

/*****************************************************************/
/**************************** Closures ***************************/
/*****************************************************************/

// Ejercicio D.

// Implementar una funcion usando closures
// Pepe tiene 28 años. Se quiere crear una funcion que incremente la edad de Pepe en un año
// y muestre por consola la nueva edad de Pepe.
// Por ejemplo, si llamo a la funcion growUp(), deberia devolver "Pepe tiene ahora 29 años."
// Si vuelvo a llamar a growUp(), deberia devolver "Pepe tiene ahora 30 años."
// Y asi consecutivamente...


function growUp() {
    var age=28;
    return function moreAge(){
        age++;
        return 'Pepe tiene ahora '+ age + ' años';
    }
}


/*****************************************************************/
/****************************** BST ******************************/
/*****************************************************************/

// Ejercicio E.

// Dado un Binary Search Tree, devolver las hojas de ese arbol en un array
// ordenado de menor a mayor.
// Si se nos presenta un arbol como el que se encuentra en el archivo BST.png
// la funcion deberia retornar [1, 5, 14].

BinarySearchTree.prototype.getLeafs = function (array=[]) {
    /*if (this.left){
        if (!this.left.left&&!this.left.right){
            array.push(this.left.value); 
        } else{
            array.concat(this.left.getLeafs());
        }
    }
    if (this.right){
        if (!this.right.left&&!this.right.right){
            array.push(this.right.value); 
        } else{
            array.concat(this.right.getLeafs());
        }
    }*/
    if (!this.left&&!this.right) array.push(this.value); 
    if (this.left&&!this.right) this.left.getLeafs(array);
    if (!this.left&&this.right) this.right.getLeafs(array);
    if (this.left&&this.right){
        this.left.getLeafs(array);
        this.right.getLeafs(array);
    }
    return array;
};

/*****************************************************************/
/***************************** QUEUE *****************************/
/*****************************************************************/

// Ejercicio F.

// Dada una Queue, implementar una funcion que vacie dicha queue.
// Es decir que remueva todos los elementos uno por uno de la queue.
// Por ejemplo: [1, 2, 3, 4, 5, 6] --> [];
// HINT: usar el metodo .isEmpty() de la clase Queue ya implementada.

Queue.prototype.clearAll = function () {
    while(this.isEmpty()===false){
        this.dequeue()
    };
};

/*****************************************************************/
/***************************** SORT ******************************/
/*****************************************************************/

// Ejercicio G.

// Ordenar un array de objetos segun DNI de mayor a menor (descendente).
// Ejemplo:
// objetoPersonas = [
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
// ];

// Resultado: [
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
// ];

function sortByDni(obj) {
    for (let i = 0; i < obj.length; i++) { 
        for (let j = 0; j < (obj.length - i - 1); j++) { 
          if(obj[j].dni < obj[j+1].dni) {
            let tmp = obj[j]; 
            obj[j] = obj[j+1]; 
            obj[j+1] = tmp; 
          }
        }        
      }
      return obj;
}

/*****************************************************************/
/**************************** DESAFIO ****************************/
/*****************************************************************/

// RESOLVER SI TIENEN TIEMPO.
// Implementar una funcion que convierta un numero de decimal a hexadecimal.
// Devolver el numero hexadecimal como String y separar con un espacio cada dos caracteres.
// Ademas verificar que el numero pasado sea entero y mayor que cero. No decimales, no negativos, no cero.
// Ejemplo: decToHex(156555) --> "26 38 B"
// decToHex(16777215) --> "FF FF FF"
// EXTRA:
// Si a la funcion ademas del numero se le pasa otro parametro que diga 'addHashtag' (#).
// Agregar el '#' al principio del string y quitar todos los espacios en blanco.
// Ejemplo: decToHex(16777215, 'addHashtag') --> #FFFFFF

// La base hexadecimal tiene 16 simbolos, como el decimal tiene diez, el binario tiene dos, el octal tiene ocho.
// Estos 16 simbolos van del 0 al 9 y contienen letras de la 'A' a la 'F' (en mayusculas para esta ocasion).
//
// Les dejo una tabla de decimal (DEC) a hexadecimal (HEX).
//
// Para investigar: https://bit.ly/3v8dRqX
//
//
// DEC -------- HEX
//  0            0
//  1            1
//  2            2
//  3            3
//  4            4
//  5            5
//  6            6
//  7            7
//  8            8
//  9            9
//  10           A
//  11           B
//  12           C
//  13           D
//  14           E
//  15           F

function separar(str){
    if (str.length>0){
       str2.push((str.slice(0,2)));
       str=str.slice(2);
       return separar(str)
    }
    return str2.join(" ");
}

function decToHex(number, add) {
    var hexa;
    if (number>0 && Number.isInteger(number)===true){
        hexa=number.toString(16).toUpperCase();
        if (add==='addHashtag'){
            return '#'+hexa;
        }
        str2=[];
        return separar(hexa);
    }
}

// NO BORRAR NI TOCAR NI AGREGAR NADA DEBAJO DE ESTA LINEA!!!!!
module.exports = {
    Queue,
    LinkedList,
    BinarySearchTree,
    isPalindrome,
    growUp,
    sortByDni,
    decToHex,
};
