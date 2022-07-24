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
var fifty_fifty = [
    ['Delhi', 'Bhopal'],
    ['6', '7'],
    ['Software Engineering', 'Counseling']
    ['10', '12']
]
var i = 0
var c = 0
console.log("you have 5050 lifeline , if you want you  can  use it by entering '5050' ")
while (i < question_list.length) {
    console.log(question_list[i])
    var j = 0
    while (j < options_list[i].length) {
        console.log(options_list[i][j])
        j++
    }
    var user = require("readline-sync")
    var n = user.question("enter")
    if (n == solution_list[i]) {
        console.log('congress')
    } else if (n == 5050) {
        if (c == 0) {
            console.log(fifty_fifty[i])
            c++

            var user1 = require("readline-sync")
            var n1 = user1.question("enter")
            if (n1 == solution_list[i]) {
                console.log("congrates! , you choice correct option")
            } else {
                console.log("sadly!, your choice wrong option")
            }
        } else {
            console.log("you used fifty fifty ,so please enter your own answer")
        }
    } else {
        console.log("oops! your answer is wrong ")
        console.log('quite')
        break
    }
    i++
}