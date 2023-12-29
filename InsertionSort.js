let arr=[5,1,2,4,7,9,3]

console.log(find(arr))


function find(arr){

    for(let i=0;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>arr[i]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
       
    }

    return arr
}