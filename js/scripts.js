function converter(convertNumber, convertOne, convertFive, convertTen) {
  var returnString = "";
  for (var i = 0; i < convertNumber; i++) {
    if (i<3 || i>4 && i<8) {
      returnString += convertOne;
    } else if (i === 3) {
      returnString = convertOne + convertFive;
    } else if (i === 8) {
      returnString = convertOne + convertTen;
    } else if (i === 4) {
      returnString = returnString.replace(convertOne, "");
    }
    if (convertNumber === 0) {
      returnString = convertTen;
    }
  }
  return returnString;
}


$(document).ready(function(){
  $("#Number-converter").submit(function(event){
    //  debugger;
    event.preventDefault();
    var answerString = "";
    var userInput = $("input#Roman-Numerals").val();
    var userArray = [];
    userArray = userInput.split("");
    for (var a = 0; a < userArray.length; a++) {
      userArray[a] = parseInt(userArray[a]);
    }
    userArray = userArray.reverse();
    var romanArray = ["I", "V", "X", "L", "C", "D", "M"];

    for (var b = 0; b < userArray.length; b++) {
      var convertNumber = userArray[b];
      var convertOne = romanArray[b];
      var convertFive = romanArray[b+1];
      var convertTen = romanArray[b+2];
      // debugger
      var romanNumber = converter(convertNumber, convertOne, convertFive, convertTen);
      answerString = romanNumber + answerString;
    }
    $("#Output").text(answerString);
  });
});
