//Implement an algorithm to determine if two strings are permutations of one another

var questionStr = "1.2";

//tests for whether or not the test should pass
var tests = [
				{ str1: "abc",
				  str2: "bca",
				  pass: true
				},
				{ str1: "aaa",
				  str2: "bbb",
				  pass:false
				},
				{ str1: "aba",
				  str2: "bbc",
				  pass: false
				},
				{ 
				  str1: "z1v",
				  str2: "1zv",
				  pass: true
				},
				{ str1: "",
				  str2: "",
				  pass: true
				},
				{ str1: "a a",
				  str2: " aaa",
				  pass: false
				},
				{ str1: "azerbaijan",
				  str2: "turkmenistan",
				  pass: false
				},
				{ str1: "abcdefghijklmnopqrstuvzyxw",
				  str2: "bcadfegihjklmnopqrstuvwxzy",
				  pass: true
				}, 
			];

function main(){
	var passed = true;
	for(var i = 0; i< tests.length; i++){
		var current1 = tests[i].str1;
		var current2 = tests[i].str2;
		var expected = tests[i].pass;
		if(isPermutation(current1, current2) !== expected){
			console.error("Test "+i+" failed");
			passed = false;
		}
		else{
			console.log("Test "+i+" passed");
		}
	}
	
	if(passed){
		console.log("Question "+questionStr+": All tests passed!");
	}
	else{
		console.error("Question "+questionStr+": At least one test failed.");
	}	
}

//takes two strings and returns true if they are permutations of one another
//sorts the string then compares, character by character
function isPermutation(str1, str2){
	if(str1.length != str2.length){
		return false;
	}
	else{
		var sort1 = sortString(str1);
		var sort2 = sortString(str2);
		var permutation = true;
		for(var i = 0; i< str1.length; i++){
			if(sort1[i] !== sort2[i]){
				permutation = false;
			}
		}

		return permutation;
	}
}

//sorts the characters in a string
function sortString(str){
	var sortedStr = str;
	var isSorted = false;
	var idx = 0;
	while(!isSorted){
		var swap = idx+1;
		if(idx === sortedStr.length){
			isSorted = true;
		}
		else if(sortedStr[swap] < sortedStr[idx]){
			var newStr = sortedStr.substring(0, idx)+sortedStr[swap]+sortedStr[idx]+sortedStr.substring(swap+1); 
			sortedStr = newStr;
			idx=0;
		}
		else{
			idx++;
		}
	}

	return sortedStr;
}

main();