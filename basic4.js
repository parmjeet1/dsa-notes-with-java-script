// Check if a large number is divisible by 6 or not

const largestNumber=(arr)=>{
	let largetst=0
	arr.filter((i,index,newarr)=>{
		if(i>largetst){
			largetst=i
		}

	}  )
// console.log('newarr',arr)
	
	if(largetst%6===0){
	console.log(largetst,'divisible by 6')		
	}else{
	console.log(largetst,'Not divisible by 6')		

	}

}

largestNumber([2,3,12,1,6,18,45])


const largestVialoop=(arr)=>{
let largest=0;
for(let i=0; i<arr.length;i++){
	if(arr[i]>largest){
		largest=arr[i]
	}
}

if(largest%6===0){
	console.log(largest,"is divisible by 6")
}else{
	console.log(largest,"is Not divisible by 6")

}

}

largestVialoop([1,2,3,5,7,8,9,36])