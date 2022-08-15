const text = document.getElementById("textArea");
const total = document.getElementById("total");
const remaining = document.getElementById("rem");

text.addEventListener("input", () => {
    total.innerText = `Total Characters: ${text.value.length}`
    remaining.innerText = `Remaining: ${parseInt(text.getAttribute("maxlength")) - text.value.length}`
})



