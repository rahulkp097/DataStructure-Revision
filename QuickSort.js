
let arr=[5,3,4,11,0,6,7,8,3]

console.log(quickSort(arr))

function pivot(arr,pivotIndex=0,endIndex=arr.length-1){
  
  let swapIndex=pivotIndex
  
  for(let i=pivotIndex+1;i<=endIndex;i++){
    if(arr[i]<arr[pivotIndex]){
      swapIndex++
      [[arr[swapIndex],arr[i]]=[arr[i],arr[swapIndex]]]
    }
  }
  
   [[arr[swapIndex],arr[pivotIndex]]=[arr[pivotIndex],arr[swapIndex]]]
  
return swapIndex
}


function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex=pivot(arr,left,right)
        
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
}