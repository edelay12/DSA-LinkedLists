
    class _Node {
        constructor(value, next) {
            this.value = value;
            this.next = next;
        }
    }

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0;
    };

    insertFirst(item){
        this.head = new _Node(item, this.head)
        this.size++
    }

    insertLast(item){
        let node = new _Node(item)
        let current;
        // if empty, make head 
        if (!this.head){
            this.head = node
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(item, index) {
        if (index > 0 && index > this.size) {
            return;
        } 

        if (index === 0 ){
            this.insertFirst(item); 
        }

        const node = new _Node(item);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    getAt(index){
        let current = this.head;
        let count = 0;

        while(count < index) {
           if(count == index) {
               console.log('getAt : ' + current.value);
           }
            count++
            current = current.next;
        }
        return null;
    }
    
removeAt(index){
if (index > 0 && index > this.size){
    return;
}

let current = this.head;
let previous;
let count = 0;

if (index === 0) {
    this.head = current.next
} else {
    while(count < index){
        count++;
        previous = current;
        current = current.next;
    }

    previous.next = current.next;
}
this.size--;
}

removeByName(item){
    let current = this.head;
    let previous;

        while(current){
            if(current.value == item){
                previous.next = current.next;
                this.size--;
                return null;
            }
            previous = current;
            current = current.next;
        }
    return null;
    }
findPrevious(name){
    let current = this.head;
    let previous;
    let count = 0;

    while(count < index) {
       if(count == index) {
           console.log('previous : ' + previous.value);
       }
       previous = current
        count++
        current = current.next;
    }
    return null;

}

findLast(){
        let current = this.head;
        while(current){
            current = current.next
        }
        return this.console.log(current.value)
}

isEmpty(){
    return console.log(!this.head);
}

getSize(){
    return console.log(this.size)
}


    printListItems(){
        let current = this.head;
    
        while(current){
            console.log(current.value)
            current = current.next
        }
    }




    
reverseList(){
    let current = this.head,
    previous,
     tmp; 
    
    while(current){
        tmp = current.next;
        current.next = previous;

        previous = current;
        current = tmp;
    }
    return previous;
}
   getThirdFromLast(){
       let current = this.head;
       let previous, third;

       while (current) {
           third = previous
           previous = current
            current = current.next;
       }
       console.log(third);
   }

   findMiddle(){
    let current = this.head;
    let counter = 0;

    while (current) {
        counter++
        current = current.next;
    }
    this.getAt(Math.round(counter/2))
   }

   sortList(list){
       list.sort((a, b) => {
           return a>b;
       })
   }

}


const sll = new LinkedList();
sll.isEmpty();
sll.insertFirst('Apollo')
sll.insertFirst('Boomer')
sll.insertFirst('Helo')
sll.insertFirst('Husker')
sll.insertFirst('Starbuck')
sll.insertLast('Thaudia')
sll.printListItems();

console.log('------')
sll.insertAt('Kat', 3)
sll.removeAt(2)
sll.removeByName('Thaudia')
sll.getAt(3)
sll.printListItems();

console.log('supplemental functions')
sll.getSize();
sll.isEmpty();

console.log('Drills')
sll.getThirdFromLast();
sll.reverseList();
sll.printListItems();


