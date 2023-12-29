const arr=[10,70,2,90,50]

console.log(bubbleSort(arr))
function bubbleSort(arr){

    for(let i=0;i<arr.length-1;i++){
        
        for(let j=i+1;j<arr.length;j++){
            
           if(arr[j]<arr[i]) [[arr[i],arr[j]]=[arr[j],arr[i]]]
        }
    }

    return arr
}