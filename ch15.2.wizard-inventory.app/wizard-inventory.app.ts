import { Item } from "./Item"
let readline = require("readline-sync")

console.log("Welcome to the Wizard Inventory Game\n");
let choice = "y";
let inventory: Item[] = [
    new Item(1,"wooden staff"),
    new Item(2, "wizard staff"),
    new Item(3, "cloth shoes")
];
let userInput = 0;
while (userInput != 5) {
displayMenu();
userInput = readline.questionInt("Command: ");
getAndDoMenu(userInput, inventory);



};
function displayMenu() {
    console.log("COMMAND MENU\nshow - Show all items\n"
        +"grab - Grab an item\n"
        +"edit - Edit an item\n"
        +"drop - Drop an item\n"
        +"exit - Exit the program\n"
    );
};
function showItems(invList: Item[]) {
    for (let inv of invList) {
        console.log(inv.id +", " +inv.name);
    }
}
function getAndDoMenu(input: number, i2: Item[]) {
    switch (input) {
        case 1:
            return showItems(i2);
            break;
        case 2:
            if (i2.length<6) {
            let idNum = readline.questionInt("Enter the id: ");
            let itemName = readline.question("Enter item name: ");
            let it = new Item(idNum, itemName);
            i2.push(it);
            return console.log(idNum+". " +itemName +" added.\n");
            } else 
            return console.log("You can't carry any more items. Drop something first.\n");
            break;
        case 3: 
            let specificId = readline.questionInt("Number: ");
            let newName = readline.question("Updated name: ");
            let forEdit = i2.find(i => i.id === specificId);
            if (forEdit) {
                forEdit.name = newName;
                return console.log("Item number "+specificId +" was updated./n")
            }
            else 
            return console.log("no item found for id: " +specificId);
            break;
        case 4:
            let idForDelete = readline.questionInt("Number: ");
            let deleteIndex = i2.findIndex(i => i.id === idForDelete);
            if (deleteIndex !== -1) {
                i2.splice(deleteIndex, 1);
                return console.log("Item deleted successfully!")
            }
            else 
            return console.log("no item found for id: " +idForDelete);
            break;
    }
};