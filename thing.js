const elem = document.getElementById('markdownInput')

elem.addEventListener("keyup", () => {
    document.getElementById('markdownOutput').innerHTML = marked(elem.value)
})