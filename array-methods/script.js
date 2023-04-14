const arr1=['a','b','c','d','e']
//removeb
// arr1.splice(1,1)
// console.log(arr1);
// //removecd
// arr1.splice(2,2)
// console.log(arr1);
// //removelast
// arr1.splice(arr1.length-1)
// console.log(arr1);

// arr1.splice(arr1.length-3,3)
// console.log(arr1);

// arr1.splice(3,0,"3","4")
// console.log(arr1);

arr1.splice(0,2,"A","B")
console.log(arr1)


const arr2=['user1','user2','user3',11,3,5]
const newArr=arr2.slice()
console.log(newArr)

const newArr2=arr2.slice(1,5)
console.log(newArr2)

const newArr3=arr2.slice(2)
console.log(newArr3)

//3.concat method

const arr3=[1,2,3]
const arr33=[4,5,6]
const newArr31=arr3.concat(arr33)

const newArr32=arr3.concat(['a','b'])

//4.forEach method
const arr4=['name','surname',10,'age','city','uni',80,20]
arr4.forEach(element=>console.log(element))

arr4.forEach((item,index,array)=>{
    if(typeof item==='number'){
        console.log(item*2)
    }
})
//5 Map method
const arr5=[4,5,6,'2',6,true,undefined,'55']
const newArr51=arr5.map((item)=>console.log(item))

const newArr52=arr5.map((item)=>{
    if(typeof item==='number'){
        console.log(item*5)
    }else{
        console.log(item)
    }
})


const newArr53=arr5.map((item)=>console.log(String(item)))

const newArr54=arr5.map((item)=>console.log(Boolean(item)))

const newArr55=arr5.map((item)=>console.log(Number(item)))








