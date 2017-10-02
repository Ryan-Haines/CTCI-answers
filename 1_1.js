//Implement an algorithm to determine if a string has all unique characters
//don't use any data structures besides strings

//tests in the form of tuples for whether or not the test should pass
var tests = [
				{ str: "abc",
				  pass: true
				},
				{ str: "aaa",
				  pass:false
				},
				{ str: "aba",
				  pass: false
				},
				{ 
				  str: "z1v",
				  pass: true
				},
				{ str: "",
				  pass: true
				},
				{ str: "a a",
				  pass: false
				},
				{ str: "azerbaijan",
				  pass: false
				},
				{ str: "abcdefghijklmnopqrstuvzyxw",
				  pass: true
				}, 
			];

function main(){
	var passed = true;
	for(var i = 0; i< tests.length; i++){
		var current = tests[i].str;
		var expected = tests[i].pass;
		if(isUnique(current) !== expected){
			console.error("Test "+i+" failed");
			passed = false;
		}
		else{
			console.log("Test "+i+" passed");
		}
	}
	
	if(passed){
		console.log("All tests passed!");
	}	
}



//takes a string and returns true if the string has all unique characters, false otherwise
//first sorts the string into character order, then checks that each character has a greater value than the last
function isUnique(str){
	var sortedStr = sortString(str);
	for(var i = 0; i< sortedStr.length; i++){
		if(i>=str.length-1){
			return true;
		}
		else if(sortedStr[i] === sortedStr[i+1]){
			return false;
		}
	}

	return true;
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