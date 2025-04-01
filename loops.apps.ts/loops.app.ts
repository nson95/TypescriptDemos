let readline = require('readline-sync');
// while loop; choice ="y"
let choice: string = "y";
while (choice=="y") {
    // index for loop

    for (let i: number = 0; i <= 100; i++) {
        console.log(i);
    }

    choice = readline.question("Continue? y/n").toLowerCase();
    if (choice == "z")
        console.log("z enetered");
}

// foreach loop
let names:string[] = ['Jim', "Andy", "Adrian", "Nick"];

names.forEach(element => {
    console.log(element);
});
names.sort();
for(let s of names) {
    console.log("Student: "+s);
}
