class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}


class linkedList{
    constructor(value){
      const newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=1
    }


    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        
        this.length++
        return this
    }
    pop(){
        if(!this.head)return undefined

        let temp=this.head
        let pre=this.head
        while(temp.next){
           pre=temp
            temp=temp.next
        }
        this.tail=pre
        this.tail.next=null
        this.length--
        return temp
    }
    unshift(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
            this.length++
        }

        
    }

    shift(){
        if(!this.head)return undefined
        if(!this.head.next)return undefined

        const temp=this.head
        this.head=this.head.next
        temp.next=null
        this.length--
        return temp
        
    }
    getItem(index){
        if(index<0 || index>=this.length)return undefined

        let temp=this.head
        for(let i=0;i<index;i++){

            temp=temp.next
        }
        return temp
    
    }

    setItem(index,value){
        let temp=this.getItem(index)
        
        if(temp){
        temp.value=value
        return true
        }
        return false
    }
    remove(index){
        if(index <0 || index>=this.length)return undefined
        if(index===0 )return this.shift()
        if(index===this.length-1)return this.pop()

        let prev=this.getItem(index-1)
        let temp=prev.next
        prev.next=temp.next
        temp.next=null
        this.length--
        return temp



    }

    reverse(){
        let temp=this.head
        this.head=this.tail
        this.tail=temp

        let next=null
        let prev=null

        for(let i=0;i<this.length;i++){
            next=temp.next
            temp.next=prev
            prev=temp
            temp=next
        }
    }

    findMiddle(){
        let fast=this.head
        let slow=this.head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }

        return slow
    }


}



const MylinkedList=new linkedList(50)
const MylinkedList2=new linkedList(50)
MylinkedList2.push(30)
MylinkedList2.push(5)
MylinkedList2.push(80)
MylinkedList2.push(60)
MylinkedList.push(10)
MylinkedList.push(20)
MylinkedList.push(30)
MylinkedList.push(40)
MylinkedList.push(5)
MylinkedList.unshift(3)
MylinkedList.setItem(1,100)

const link1=MylinkedList.pop()
const link2=MylinkedList2.pop()



console.log("middle",MylinkedList.findMiddle())
MylinkedList.reverse()
console.log(MylinkedList)
    