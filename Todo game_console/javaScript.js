let todo = [];
let index = 0;
let additem = 0;
let string = prompt("Enter your request.");

while (true) {
    if (string == "quit") 
        {
        break;
        } else if (string == "add")
            {
                additem = prompt("Enter your item to add.");
                console.log(todo.push(additem));
                console.log("Item added");
            } else if (string == "delete") 
                {
                    index = prompt("Enter your index.");
                    todo.splice(index, 1);
                    console.log("Item deleted");
                } else if (string == "list") 
                    {
                        for (let i = 0; i < todo.length; i++) 
                            {
                                console.log("Your index is: ", i, "and item is:", todo[i]);
                            }
                    }else 
                    {
                        console.log("Wrong request your entered");
                        console.log("please try again.");
                    }
                         string = prompt("Enter your request.");
}