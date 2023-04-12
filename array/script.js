let myText="An Array is a collection of items of same data type stored at contiguous memory locations."
let count=0;
for(let i=0;i<myText.length;i++){
    if(myText[i]=="a" || myText[i]=="A"){
        count++
    }
}
console.log(count);


const arr1=[1,2,4,5,7,9,13,22];
let sum=0;
for(let i=0;i<arr1.length;i++){
    sum+=arr1[i]
}
console.log(sum);

const arr2=[false,0,2,true,23,undefined,"are u stack?","come on"];
const newArr=[]
for(let i=0;i<arr2.length;i++){
    if(i%2){
        newArr.push(arr2[i])
    }
}
console.log(newArr)


let text1="How is it going?"
let newText=""
newText=text1
for(let i=0;i<text1.length;i++){
    if(text1[i]!="i"){
        newText+=text1[i]

    }
}console.log(newText)


const numbersArr=[2,false,"5","true",9,0,"1"]
let summ=0;

for(let i=0;i<numbersArr.length;i++){
    if(typeof (numbersArr[i])=="number"){
        sum+=numbersArr[i]
    }
    
}console.log(summ)


const mixType=[1,"3",4,false,null,22,true]
let stringType=[]
for(let i=0;i<mixType.length;i++){
   stringType.push(String(mixType[i]))
   
}console.log({stringType});

const myObj={
    color:"red",
    width:320,
    height:200,
    padding:4,
    fontSize:"22px"
}

for(let value in myObj){
    if(typeof myObj[value]=="number"){
        console.log(myObj[value]*2)
    }
}
