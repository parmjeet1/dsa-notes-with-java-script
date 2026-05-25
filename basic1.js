// Count number of even and odd elements in an array

const countArray=(arr)=>{
    let evenCount=0;
    let oddCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenCount +=1;
            console.log('even array ',arr[i])


        }else{
            oddCount +=1;
            console.log('odd array',arr[i])
        }
    }
console.log("evenCount",evenCount,"oddCount",oddCount);

}

countArray([2,4,6,8,9,10])