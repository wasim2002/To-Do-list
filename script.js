const input = document.querySelector("#inputF")
const ul =document.querySelector(".ul")
let keys = ""
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        keys = input.value
        addToDo(keys)
    }
})
function addToDo(e) {
    let li = document.createElement("li")
    li.innerHTML = `
    <div class="textA">${e}</div>
    <i>×</i>
    `
    ul.appendChild(li)
}