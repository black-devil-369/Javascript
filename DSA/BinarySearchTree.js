"use strict";
class Node{
    constructor(){
        this.left = null;
        this.item = null;
        this.right = null;
    }
}
class BinarySearchTree{
    root = new Node();
    constructor(){
        this.root = null;
    }
    inorderrec(temp){
        if(temp!=null){
            this.inorderrec(temp.left)
            console.log(temp.item);
            this.inorderrec(temp.right)
        }
    }
    inorder(){
        this.inorderrec(this.root);
    }
    insert(data){
        const n = new Node();
        n.left = null;
        n.item = data;
        n.right = null;
        if(this.root == null){
            this.root = n;
        }
        else{
            let temp = new Node();
            temp = this.root;
            while(n.item!=temp.item){
                if(n.item<temp.item){
                    if(temp.left!=null){
                        temp = temp.left;
                    }
                    else{
                        temp.left = n;
                        break;
                    }
                }
                else{
                    if(temp.right!=null){
                        temp = temp.right;
                    }
                    else{
                        temp.right = n;
                        break;
                    }
                }
            }
            if(n.item==temp.item){
                n = null;
            }
        }
    }
}

const b = new BinarySearchTree();
b.insert(34);
b.insert(26);
b.insert(40);
b.insert(20);
b.insert(30);
b.insert(38);
b.insert(45);
b.inorder();