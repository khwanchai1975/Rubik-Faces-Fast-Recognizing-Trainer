function random(number) {
    return Math.floor(Math.random() * number)
}

let container_left = document.querySelector('.left-container')
let container_right = document.querySelector('.right-container')
let childrenLeft = container_left.querySelectorAll('.box')
let childrenRight = container_right.querySelectorAll('.box')
let display = document.getElementById("display")
for (let i = 0; i < 3; i++) {
    childrenLeft[i].addEventListener('click', clickChange)
    childrenRight[i].addEventListener('click', clickChange)
}

let cubes
let color_left
let color_right
let color
let pos


function question(color, color_left, color_right) {
    this.color
    this.color_left
    this.color_right
    this.correct = 0
    this.wrong = 0
}



function regenerate() {

    cubes = ['red', 'green', 'orange', 'blue']
    pos = random(cubes.length)
    color = cubes[pos]
    color_left = cubes[pos == 0 ? 3 : pos - 1]
    color_right = cubes[pos == 3 ? 0 : pos + 1]


    let container_center = document.querySelector('.center-container')
    let children = container_center.querySelectorAll('.box')
    children[1].className = "box"
    children[1].classList.add(color)
    delete cubes[pos]
    cubes = cubes.filter(Boolean)

    let side = random(2)

    for (let i = 0; i < 3; i++) {
        if (!side) {
            childrenRight[i].className = "box"
            childrenLeft[i].className = "box"
            childrenLeft[i].classList.add(cubes[i])
        }
        else {
            childrenRight[i].className = "box"
            childrenLeft[i].className = "box"
            childrenRight[i].classList.add(cubes[i])
        }

    }

}
regenerate()


function clickChange() {
    console.clear()
    let ans = this.classList.item(1)
    if (this.parentElement.classList.item(0) == "left-container") {
        display.innerHTML = ans == color_left ? "ถูกแล้ว" : "คุณคลิก " + ans + " ผิด ที่ถูกคือทางซ้ายของ " + color + " คือ " + color_left
    } else {
        display.innerHTML = ans == color_left ? "ถูกแล้ว" : "คุณคลิก " + ans + " ผิด ที่ถูกคือทางขวาของ " + color + " คือ " + color_right
    }

    /* เสร็จแล้วเริ่มใหม่ */
    regenerate()
}