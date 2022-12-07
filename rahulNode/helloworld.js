console.log("hello world")
 let c=5
 console.log(c)
 c=8
 console.log(c)

 flag=true

 if(!flag)
 {
console.log("condition is true")
 }
 else
 {
    console.log("condition is false")
 }

 i=0
 // in here it will still run even though i is 10
 /*while(i < 10)
 {
    console.log(i)
    i++
 }*/


//in here it will no longer run if i is 10
do
{
console.log(i)
i++
}while(i<10)

//For loop is used for n number of times based on repeat , while loop used based on condition of true or false
console.log("****************")
for(let k = 1; k<=10; k++){
console.log(k)
}