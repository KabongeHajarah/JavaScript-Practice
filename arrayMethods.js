//filter methods

const items=[
{name:"Bike", price:100},
{name:"car", price:20},
{name:"computer", price:200},
{name:"Book", price:500},
{name:"Phone", price:600}
]
const filtered= items.filter((item)=> 
    { 
return  item.price<=100
    })
    
console.log(filtered)

//map
const maps= items.map((item) =>{

return item.name
})
console.log(maps)

//
const find= items.find((item) =>{

    return item.name==="Book"
    })
    console.log(find)
//for each
const each= items.forEach((item) =>{

    console.log(item.price)
    })

    //some
    const Expensive= items.some((item)=>
    {
      return item.price>100  
    })
    console.log(Expensive);
    //every , its the same way as some but it cecks every item


    //includes method
    const nums=[0,1,2,3,4];
    const includenum=nums.includes(0);
    console.log(includenum);