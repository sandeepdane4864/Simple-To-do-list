let btn = document.getElementById("add");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please enter a value.");
        return;
    } else {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    }
})


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (input.value === "") {
            alert("Please enter a value.");
            return;
        } else {

            let item = document.createElement("li");
            item.innerText = input.value;
            ul.appendChild(item);
            input.value = "";

            let delbtn = document.createElement("button");
            delbtn.innerText = "Delete";
            delbtn.classList.add("delete");
            item.appendChild(delbtn);
        }
    }

});

// let deletebtn = document.querySelectorAll(".delete");
// deletebtn.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//         btn.parentElement.remove();
//     });
// });

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        console.log("Deleted");
    }
})

function check() {

}