document.addEventListener("DOMContentLoaded", function() {
    console.log("test");
});

function handleInput(event) {
    if (event.key === 'Enter') {
        var userInput = document.getElementById("textInput").value;
        var listItem = document.createElement("li");
        listItem.textContent = userInput;
        document.getElementById("listOutput").appendChild(listItem);
        document.getElementById("textInput").value = "";
    }
}

document.getElementById("textInput").addEventListener("keyup", handleInput);
