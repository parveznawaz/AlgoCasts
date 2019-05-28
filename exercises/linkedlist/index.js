// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }

    insertFirst(data){
        this.head=new Node(data,this.head);
    }

    size(){
        let count=0;
        let current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head) return null;
        let current=this.head;
        while(current){
            if(!current.next){
                return current;
            }
            current=current.next;
        }
        
    }

    clear(){
        this.head=null;
    }

    removeFirst(){
        if(!this.head) return;
        this.head=this.head.next;
    }

    removeLast(){
        if(!this.head) return null;
        if(!this.head.next){
            this.head=null;
            return;
        }
        let prev=this.head;
        let node=this.head.next;
        while(node.next){
            prev=node;
            node=node.next;
        }
        prev.next=null;
    }

    insertLast(data){
        if(!this.head) 
            this.head=new Node(data);
        else
            this.getLast().next=new Node(data);
    }

    getAt(index){
        let counter=0;
        let node=this.head;
        while(node){
            if(counter==index) return node;
            counter++;
            node=node.next;
        }
        return null;
    }

    removeAt(index){
        if(!this.head) return;
        if(index==0) {
            this.head=this.head.next;
            return;
        }
        let prevNode=this.getAt(index-1);
        if(prevNode.next)
            prevNode.next=prevNode.next.next;
        
    }

    insertAt(data,index){
        if(!this.head) {
            this.head=new Node(data);
            return;
        }
        if(index==0) {
            this.head=new Node(data,this.head);
            return;
        }
        let prevNode=this.getAt(index-1)||this.getLast();
        let node=new Node(data,prevNode.next);
        prevNode.next=node;
    }

    forEach(fn){
        let node=this.head;
        let counter=0;
        while(node){
            fn(node,counter);
            node=node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}

module.exports = { Node, LinkedList };
