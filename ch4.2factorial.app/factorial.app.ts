let r1 = require("readline-sync");
function f() {
    console.log("Welcome to the Factorial Calculator\n");
    let choice: string = "y";
    while (choice == "y") {
    let inputNum = r1.questionInt("Enter an integer that is greater than 0 and less than 10: ");
        let ans = 1;
    for (let i = 1; i<=inputNum; i++) {
        ans *= i;
    }
    console.log("The factorial of "+inputNum +" is "+ans);
    choice = r1.question("Continue? y/n");
}
console.log("Goodbye");
}
f();