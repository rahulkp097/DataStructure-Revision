function Node(value){
    this.value=value
    this.next=null
}

function Queue(value){
const newNode=new Node(value)

this.first=newNode
this.last=newNode
this.length=1

}

Queue.prototype.Enqueue=function(value){
const newNode=new Node(value)
if(!this.first){
    this.first=newNode
    this.last=newNode
    this.length=1
}else{
    this.last.next=newNode
    this.last=newNode
    this.length++
}
}


const NewQueue=new Queue(20)
NewQueue.Enqueue(10)
console.log("queue",NewQueue)