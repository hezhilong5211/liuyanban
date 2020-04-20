let btn = document.getElementById('btn')
const m = new Map()
btn.onclick = () => {
    let a = document.getElementById('biaoti').value
    // console.log(a)
    let b = document.getElementById('neirong').value
    m.set(a, b)
    show()
}

let show = () => {
    let str = ""
    for (let [key, value] of m) {
        str = str + `
        标题:<span>${key}</span>
        <br />
        内容:
        <li class="list-group-item">${value}</li>
        `
    }
    $(".liuyan").html(str)
}