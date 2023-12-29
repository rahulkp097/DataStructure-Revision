const arr1=[1,6,7,8,4,5]
console.log(MergeSort(arr1))


function MergeSort(arr){
    if(arr.length==1)return arr

let mid=Math.floor((arr.length)/2)
let left=arr.slice(0,mid)
let right=arr.slice(mid)

return Merge(MergeSort(left),MergeSort(right))
}
function Merge(arr1,arr2){
    let sumArray=[]

let i=0
let j=0
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        sumArray.push(arr1[i])
        i++
    }
    else{
        sumArray.push(arr2[j])
        j++
    }
}
while(i<arr1.length){
    sumArray.push(arr1[i])
    i++
}
while(j<arr2.length){
    sumArray.push(arr2[j])
    j++
}
return sumArray
}

