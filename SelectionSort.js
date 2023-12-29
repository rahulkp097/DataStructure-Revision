const arr=[5,1,4,3,9,7,2]

console.log(selectionSort(arr))
function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++)
        
        if(arr[j]<arr[min]){
            min=j}

        [[arr[min],arr[i]]=[arr[i],arr[min]]]
    }


    return arr

}