// let addButton = document.getElementById("addButton")
// addButton.addEventListener("click", function(){
//     addElement();
// })


function addElement(){
    let inputText = document.getElementById("inputField").value;

    let listOfItems = document.getElementById("listOfItems");

    let numberOfWords = inputText.split(" ").length;

    let li = document.createElement("li");
    li.innerText = `You entered ${numberOfWords} words`;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "x"
    deleteButton.addEventListener("click", function(){
        li.remove();
    })
    li.appendChild(deleteButton);

    listOfItems.appendChild(li);
}

