

const obj1={id:1,firstName:"Rashid",lastName:"Aliyev",location:"GDU 2"}

const obj2=obj1

obj1.id=3;
console.log(obj1)



for(let value in obj1){
    console.log(obj1[value])
}


for(let key in obj1){
    console.log(key)
}

delete obj1.location
console.log(obj1)

const newObj={}
const obj=Object.assign(newObj)
console.log

//Array
const numbers=[0,1,2,3,4,5,6,7,8,9,10]
console.log(numbers)

const arr2=[1,true,"true"]
console.log(arr2)

const arr3=[0,1,2,3,4,5]
const arr4=arr2;
console.log(arr4)

const arr5=[0,1,2,3,4,5,6,7]
arr5.push(8,9)
console.log(arr5)

const arr6=[]
arr6.push(5,6,7)
arr6[0]=1
console.log(arr6)

const arr7=["Rashid","Aliyev",20,"Quba"]
arr7[3]="Qusar"
console.log(arr7)

for(let num of numbers){
    console.log(num)
}



