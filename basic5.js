// Check if a number is Palindrome
// checkPalindrom(121);
//12121
//121
 function checkPalindrom(num){

const str =num.toString().split('').reverse().join();

 const tempStr=num.toString();
 if(tempStr==str){
	console.log("number is plaindrom")

} else{console.log("number is not plaindrom")}
	}

/*
num 123
string  "123"
[3,2,1]

*/
checkPalindromViaLoop(121)
 function checkPalindromViaLoop(num){
       

let str = `${num}`;
let result='';
// console.log(str,str.length)
for (let i=str.length-1; i>=0;i--){
result +=str[i];
}
console.log(result)
if(str===result){
console.log('is palindrom')

}


	}