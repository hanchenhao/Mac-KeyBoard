var keyboard = document.getElementById("keyboard")
var numbers = "`,1,2,3,4,5,6,7,8,9,0,-,="
var numberSign = "~,!,@,#,$,%,^,&,*,(,),_,+"
var q = "Q,W,E,R,T,Y,U,I,O,P"
var qr = "[,],\\"
var qSgin = "{,},|"
var a = "A,S,D,F,G,H,J,K,L"
var ar = ";,'"
var z = "Z,X,C,V,B,N,M"


init()

function createSpan(ele, numberSign, s) {
    let sign = numberSign.split(s || ",")

    ele.split(s || ",").forEach(function(v, i) {
        let number = document.createElement("li")
        number.textContent = v
        let s = sign[i]
        let span = document.createElement("span")
        span.textContent = s
        number.appendChild(span)
        keyboard.appendChild(number)
    })
}

function createList(ele, sign) {
    ele.split(sign || ",").forEach(function(v) {
        let number = document.createElement("li")
        number.textContent = v
        keyboard.appendChild(number)
    })
}


function createSpecial(content, className, target) {
    target = target || keyboard
    let caps = document.createElement("li")
    caps.textContent = content
    target.appendChild(caps)
    caps.className = className
}

function init() {

    createSpan(numbers, numberSign)
    createSpecial("delete", "delete right special")
    createSpecial("tab", "tab left special")
    createList(q)
    createSpan(qr, qSgin)
    createSpecial("caps lock", "caps left special")
    createList(a)
    createSpan(";,'", ":,\"")
    createSpecial("return", "return right special")
    createSpecial("shift", "shift left special")
    createList(z)
    createSpan(", . /", "< > ?", " ")
    createSpecial("shift", "shift right special")
    createSpecial("fn", "left special")
    createSpecial("control", "left special")
    createSpecial("option", "left special")
    createSpecial("command", "command left special")
    createSpecial("space", "special space ")
    createSpecial("command", "command right special")
    createSpecial("option", "right special")

    let arrow = document.createElement("ol")
        // arrow.className = "arrow-content"
    createSpecial("↑", "arrow up special")
    createSpecial("←", "arrow special")
    createSpecial("↓", "arrow down special")
    createSpecial("→", "arrow special")
        // keyboard.appendChild(arrow)

}

document.onkeypress = function(e) {
    console.log(e.key)
}