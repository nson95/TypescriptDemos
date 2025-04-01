function g() {
    let readline = require("readline-sync");
    let choice: string = "y";
    while (choice == "y") {
    console.log("Welcome to the Table of Powers App \n\n");
    let userNum: number = readline.questionInt("Enter an integer: ");
    console.log("Number\tSquared\tCubed\n");
    console.log("======\t=======\t=====\n");
    for (let i = 0; i <= userNum; i++) {
        console.log(i +"\t" +(i*i)+"\t"+(i*i*i)+"\n");
    }
    choice = readline.question("Continue? (y/n)").toLowerCase();
}
console.log("Goodbye!");
}
g();