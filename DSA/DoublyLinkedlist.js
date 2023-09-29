class node{
    constructor(){
        this.prev = null;
        this.item = null;
        this.next = null;
    }
}
class DLL{
    constructor(){
        this.start = null;
    }
    insetStart(data){
        const n = new node();
        n.prev = null;
        n.item = data;
        n.next = this.start;
        this.start = n;
    }
    insertEnd(data){
        const n = new node();
        let temp;
        n.item = data;
        n.next = null;
        if(this.start==null){
            n.prev = null;
            this.start = n;
        }
        else{
            temp = this.start;
            while(temp.next!=null){
                temp = temp.next;
            }
            n.prev = temp;
            temp.next = n;
        }
    }
    reverselist(){
        let t1,t2;
        if(this.start!=null && this.start.next!=null){
            t2 = null;
            do {
                t1 = this.start;
                this.start = this.start.next;
                t1.next = t2;
                t2 = t1;
                t1.prev = this.start;
            } while (this.start.next!=null);
            this.start.next = t1;
        }
    }
    printlist(){
        let temp;
        temp = this.start;
        while(temp!=null){
            console.log(temp.item);
            temp = temp.next;
        }
        console.log();
    }
}
// Deriver program for checking the code working in good condition or not;
const d = new DLL();
d.insetStart(299);
d.insertEnd(90);
d.insertEnd(24);
d.insetStart(56);
d.printlist();
d.reverselist();
d.printlist();
