class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{


 push(value){
    const newNode=new Node(value)
    if(!this.head){
        this.head=newNode
        this.tail=newNode
        this.length=1
    }else{
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
        this.length++
    }

 }
}


const NewDoublyLinkedList=new DoublyLinkedList()
NewDoublyLinkedList.push(20)
NewDoublyLinkedList.push(25)
NewDoublyLinkedList.push(30)
NewDoublyLinkedList.push(35)    
console.log(NewDoublyLinkedList)