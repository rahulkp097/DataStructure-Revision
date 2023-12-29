class Stack {
    constructor() {
        this.stackArray = [];
    }

    push(value) {
        this.stackArray.push(value);
    }

    pop() {
        if(this.stackArray.length==0)return undefined
        return this.stackArray.pop();  
    }
}

const newStack = new Stack();


let name="rahul"


for(let i=0;i<name.length;i++){
    newStack.push(name[i])
}
console.log("Stack:", newStack);

let rev=""

while(newStack.stackArray.length>0){
    rev+=newStack.pop()
}
console.log("Stack:", rev);


