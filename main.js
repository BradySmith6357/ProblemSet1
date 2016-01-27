var letterCapitalize = function (str){
		var words = str.split(" ");
		var arr = Array();
		for (i in words) {
			temp = words[i].toLowerCase();
			temp = temp.charAt(0).toUpperCase() + temp.substring(1);
			arr.push(temp);
		}
		return arr.join
		console.log(str)
}
		
letterCapitalize("This is a string")

// 2nd possible solution

// var letterCapitalize = function (str){
// 	return str
// 		var splitArray = .split(" ");
// 		var capLetters = function (splitArray) {
// 			var output = wordsArray.map(function(element){
// 				return capOneWord(element)
// 	})
// 	return output
// }

// console.log(letterCapitalize("first letter should be capatalized"))

//  3rd possible solution
// var capOneWord = function(oneWord){
// 	return oneWord.toUpperCase()
// }
// var mapCallback = function(element){
// 	return wordsArray.map(mapCallback)
// }
// var capitalizedWords = capOneWords(words)
// console.log(capitalizedWords)