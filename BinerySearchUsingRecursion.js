const arr=[1,2,3,4,5,6,7,8,9,10]


let target=0
console.log(find())
function find(left=0,right=arr.length){

    if(left<=right){

        let mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            return true
        }
        else if(arr[mid]<target){
            left=mid+1
            return find(left,right)
        }
        else{
            right=mid-1
            return find(left,right)
        }

    }
    return false
}