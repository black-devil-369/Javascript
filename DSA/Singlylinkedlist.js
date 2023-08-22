// creating a class Node
class Node{
    // creating a constructor inside a class Node
    constructor(){
        // initialize the member varialbe of class like,item and next ;
        this.item = null;
        this.next = null;
    }
}
// creating the class called SLL(Singly Linked List)
class SLL{
    // creating a constructor inside a SLL class
    constructor(){
        //this.start = new Node()
        this.start = null
    }
    // creating an consturctor to add node at the begin or start of list
    addstart(data){
        const n = new Node(); // creating a new node call n ;
        n.item = data; // put the data inside a n node of item
        n.next = this.start; // puth the null  to the n node of next;
        this.start = n; // pointing the start to the n node;
    }
    addend(data){
        const n = new Node();
        let t = new Node;
        n.item = data;
        n.next = null;
        if(this.start==null){
            this.start = n;
        }
        else{
            t = this.start;
            while(t.next!=null){
                t = t.next;
            }
            t.next = n;
        }
    }
    reverselist(){
        let t1 = new Node();
        let t2 = new Node();
        if(this.start!=null && this.start.next!=null){
            t2 = null;
            while(this.start.next !=null){
                t1 = this.start;
                this.start = this.start.next;
                t1.next = t2;
                t2 = t1;
            }
            this.start.next = t1;
        }
    }
    count(){
        let temp,count=0;
        temp = this.start;
        while(temp!=null){
            count++;
            temp = temp.next;
        }
        console.log(count);
    }
    printlist(){
        let temp = new Node;
        temp = this.start;
        while(temp!=null){
            console.log(temp.item + " ");
            temp = temp.next;
        }
        console.log("");
    }
}
// Deriver program for checking is working or not;
const s = new SLL();
s.addend(500);
s.addend(900);
s.addend(200);
s.addstart(1000);
s.printlist();
console.log("Reverse linked List");
s.reverselist();
s.printlist();
console.log(s.count());
