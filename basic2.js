// Average numbers in array
/*
sum of array
devide by total element of array

*/
const Average=(arr)=>{
	console.log("arr.length",arr.length)
	let sum=0;
for(let i=0;i<arr.length;i++){
sum =sum+arr[i];

}
console.log("average",sum/arr.length)
}

Average([1,1,3,3,2])