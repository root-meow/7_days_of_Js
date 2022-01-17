function processData(myArray) {
  var maximum_no = Math.max.apply(null, myArray); //Gives the highest value in an array
  console.log(
    Math.max.apply(
      null,
      myArray.filter((x) => x != maximum_no)
    )
  );
}
/*listA = A.sort(function (a, b) {return a - b})
    console.log(listA[3]);

}*/

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input.split("\n")[1].split(" ").map(Number));
});
