class Node{
    constructor(){
        this.item = null
        this.next = null
    }
}
class CLL{
    constructor(){
        this.last = null;
    }
    insertAtbegin(data){
        const n = new Node();
        n.item = data;
        if(this.last==null){
            n.next = n;
            this.last = n;
        }
        else{
            n.next = this.last.next;
            this.last.next = n;
        }
    }
    insertAtbeginAtEnd(data){
        const n = new Node();
        n.item = data;
        if(this.last==null){
            n.next = n;
            this.last =n;
        }
        else{
            n.next = this.last.next;
            this.last.next = n;
            this.last = n;
        }
    }
    reverse(){
        let t1,t2;
        if(this.last!=null && this.last.next!=null){
            t2 = null;
            do{
                t1 = this.last;
                this.last = this.last.next;
                t1.next = t2;
                t2 = t1;
            }while(this.last.next!=null);
            this.last.next = t1;
        }
    }
    printlist(){
        let temp = this.last.next;
        do{
            console.log(temp.item);
            temp = temp.next;
        }while(temp!=this.last);
        console.log(temp.item);
    }
}
// Deriver program for checking the working of code
const c = new CLL();
c.insertAtbegin(56);
c.insertAtbegin(43);
c.insertAtbegin(45);
c.insertAtbeginAtEnd(100);
c.insertAtbegin(90);
c.insertAtbeginAtEnd(110);
c.printlist();
c.reverse();
console.log("Reverse the list");
c.printlist();