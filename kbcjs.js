console.log("hello everyone")
console.log("welcome to KBC")
console.log("very good luck for your game")
console.log("so lets play the game")
var question_list = [
    "What is the capital of India?", "how many colours in rainbow?",
    "NG mei kaun se course padhaya jaata hai?", "how many girls live one room of ng?"
]

var options_list = [
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["7", "8", "6", "5"],

    ["Software Engineering", "Counseling", "Tourism", "Agriculture"],
    ["9", "8", "5", "10"]
]

var solution_list = ["d", "a", "a", "d"]

var i = 0
while (i < question_list.length) {
    console.log(i + 1, question_list[i])
    var j = 0
    while (j < options_list[i].length) {
        console.log(j + 1, options_list[i][j])
        j++
    }
    var user = require("readline-sync")
    var n = user.question("enter option")
    if (n == solution_list[i]) {
        console.log("wow!!,congrats")
    } else {
        console.log("oops!,better luck for the next time")
    }

    break
    i++

}