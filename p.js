

function merge (nums){
    if(nums.length<=1){
    return nums
    }

let mid= Math.floor(nums.length/2);
let left=nums.slice(0,mid);
let right= nums.slice(mid);

return(mergeSort(merge(left),merge(right)))
}



function mergeSort (left,right){
let sort=[];
while(left.length && right.length){
if(left[0]<right[0]){
     sort.push(left.shift())
}else{
     sort.push(right.shift())
}
}

return [...sort,...left,...right]
}




//Binary

function binary(nums, target){
let left=0;
let right= nums.length -1;
while  (left<=right){
    let middle= Math.floor((left + right)/2);

    if (nums[middle]===target){
return middle
    }
    else if ( nums[middle]<target){
        left= middle +1;
    }
    else {
        right=middle -1;
    }

}return null

}
const nums=[10,2,3,4,64,38,9,20,-20];
target=64;
console.log(merge(nums));
console.log (binary(nums,target));

//mergesort again
function mergesAgain(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2);;
    let left= arr.slice(0,mid);
    let right=arr.slice(mid)

    return Merging(mergesAgain(left), mergesAgain(right))
}
function Merging (left,right){

    let sorted= [];
while (left.length && right.length){
    

    if (left[0]<right[0]){
      sorted.push(left.shift());
    }
    else {
        sorted.push(right.shift())
    }
}
return[...sorted,...left,...right]

}
 function binaryN (arr,target){
let left=0;
let right=arr.length- 1;

while(left<=right){
    let mid= Math.floor((left + right)/2);

if (arr[mid]===target ){
    return mid
}
else if (arr[mid]< target){
    left=mid +1;

} else {
    right=mid-1;
}
 }
return "no value"



 }

const arr=["bella","ayan","meddy","cucky"];
target="ayan"
console.log(mergesAgain(arr));
console.log(binaryN(arr,target));


