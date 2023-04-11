function find(arr,length,index,a)
{
  if(index<-1)
    return console.log("false");
  if(arr[length]==a)
    return console.log("true");
  if(arr[index]==a)
  return console.log("true");
  return find(arr,length+1,index-1,a)
}
let arr=[1,2,3,4,5];
let a=+prompt("Enter your Number to find in array:");
let length=arr.length;
find(arr,0,length-1,a)