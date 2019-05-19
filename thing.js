const thing = async() => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.getElementById('markdownOutput').innerHTML = marked(document.getElementById('markdownInput').value)
            res()
        }, 500)
    })
}
const test = async() => {
    while(1 > 0) {
        await thing()
    }
}
test()