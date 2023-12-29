const arr=[1,2,3,4,5,6,7,8,9]

let left=0;
let right=arr.length-1
let target=10

console.log(find(left,right,target))
function find(left,right,target){

    while(left<=right){
        
    let mid=Math.floor((left+right)/2)
    
    if(arr[mid]===target){
        return true
    }
    else if(target<arr[mid]){
        right=mid-1
    }else{
        left=mid+1
    }
    
}
return false
}