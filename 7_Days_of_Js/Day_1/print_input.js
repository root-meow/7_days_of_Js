function processData(input) {
    //Enter your code here
    console.log(input)   // This takes any input given by the user and prints it out
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
