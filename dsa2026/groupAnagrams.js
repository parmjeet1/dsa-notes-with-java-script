groupAnagrams(strs) {
let map ={};
let result=[];

for(let i=0 ;i<strs.length ;i++){
   let currentStr =strs[i].toLowerCase();
   let countArray=[]
  for(let j=0; j<26;j++){
      countArray[j]=0; 
        }
        // console.log('step1 ',countArray)
    for(let k=0;k<currentStr.length;k++){
    let index=currentStr.charCodeAt(k)-97;
    countArray[index]=countArray[index]+1;
    }
    // console.log("step2",countArray)
    let keyString="";
    for(let l=0;l<26;l++){
        keyString=keyString+countArray[l]+"#";
    }
    // console.log("keyString",keyString)
    if(!map[keyString]){
        map[keyString]=[];
    }
    
    map[keyString][map[keyString].length]=currentStr
    // console.log("maped",map)
    
    // console.log("result",result)

}//end main loop
   for(let key in map){
        result[result.length]=map[key];
    }
    return result; 
    
}