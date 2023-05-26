

function binary (thisArr,target){
let left= 0;
let right= thisArr.length -1;
while ( left<=right){
   let middle= Math.floor((left+right)/2);

if(thisArr[middle]===target){
return middle
}
else if( thisArr[middle] < target){
left=middle+1;
}
else {
   right= middle-1;
}
}
return null
}
let thisArr=[12,20,11,10,32,90,78,1,2,4];
let target= 32;
console.log(binary(thisArr,target))



//MERGE SORT

function mergesort(arr){
   if (arr.length<=1){
      return arr
   }
let middle= Math.floor(arr.length /2)
let left= arr.slice(0,middle);
let right= arr.slice(middle);
 
return merge(mergesort(left),mergesort(right))

}
function merge (left, right){
   let sorted=[];
while (left.length && right.length){
   if (left[0]<right[0]){
      sorted.push(left.shift())
   }else{
      sorted.push(right.shift())
   }

}
return [...sorted,...left,...right]
}

 const arr=[3,-4,6,10,-15,26,47,-56,12,5,-1,0];
console.log(mergesort(arr));

//descending order

function  des(num){
   if (num.length <=1){
      return num
   }
   let mid= Math.floor(num.length /2);
   let left= num.slice(0,mid);
   let right=num.slice(mid);
   return newArr(des(left),des(right));
}




function newArr(left,right){
let descendingArr=[];
while(left.length && right.length){
if(left[0]>right[0]){
descendingArr.push(left.shift());
}
else {
   descendingArr.push(right.shift());
}
}

return[...descendingArr,...left,...right];

}
let num=[1,20,3,4,5,-2,-8,-20];
console.log(des(num));


//

function binaryS(array,target){
let left= 0;
let right=array.length -1;
while(left<=right){
   let middle= Math.floor((left+right)/2)
if(array[middle]===target){
return middle;
}
else if(array[middle]<target) {
   left= middle + 1;
}
else{
   right=middle -1;
}

}
return "not there"

}


let array=[-20,-10,1,2,4,6,9,10];
target= 10;
console.log(binaryS(array,target));



let x=[5,8,2,87,33,]
let even= x.map( function (item){
    return item*5
} )
console.log(even);


function searchBinary( arrs,target) {
  let left=0;
  let right=arr.length -1;
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
const arrs=[10,2,3,4,64,38,9,20,-20];
target=64;
console.log(merge(arrs));
console.log (binary(arrs,target));



