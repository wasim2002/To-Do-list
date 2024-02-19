const input = document.querySelector("#inputF")
const ul = document.querySelector("ul")

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addToDo(input.value)
    }
})

function addToDo(e) {
    let li = document.createElement("li")
    li.innerHTML = `
    <div class="textA">${e}</div>
    <i>×</i>
    `
    if (input.value != "") {
        ul.appendChild(li)
    }
    input.value = ""
    li.addEventListener("click", function (e) {
        let textA = li.querySelector(".textA")
        textA.classList.toggle("done")
    })
    let i = li.querySelector("i")
    i.addEventListener("click", function () {
        li.style.display = "none"
    })
}