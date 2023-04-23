let arrs=[10,20,30,40,3,1,5,2];
const newArray=arrs.map(item=>(item*10)
)
    console.log(newArray);

const thisArray=arrs.filter(item=>(item%2==0))
console.log(thisArray);

const nextArray=arrs.reduce((sum,item)=>{
    return sum + item
},0)
console.log(nextArray);



