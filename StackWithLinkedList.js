class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    
    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.length=1
        }else{
            newNode.next=this.head
            this.head=newNode
            this.length++
        }
    }

    pop(){
        if(this.length==0)return undefined
        let temp=this.head
        this.head=this.head.next
        temp.next=null
        return temp
    }

    printElements(){
        let current=this.head
        while(current){
            console.log("stackValues",current.value)
            current=current.next
        }
    }
}

const newStack=new Stack()
newStack.push(5)
newStack.push(10)
newStack.push(15)

newStack.printElements()
