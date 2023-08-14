class Node{
    constructor(){
        this.item = null;
        this.next = null;
    }
}
class SLL{
    constructor(){
        this.start = null;
    }
    addstart(data){
        const n = new Node();
        n.item = data;
        n.next = this.start;
        this.start = n;
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
