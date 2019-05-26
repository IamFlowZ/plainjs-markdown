const elem = document.getElementById('markdownInput')
const bucketBtn = document.getElementById('bucketBtn')
const modal = document.getElementById('myModal')
const close = document.getElementsByClassName('close')[0]

elem.addEventListener("keyup", () => {
    document.getElementById('markdownOutput').innerHTML = marked(elem.value)
})

bucketBtn.onclick = () => {
    modal.style.display = "block"
}

close.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}