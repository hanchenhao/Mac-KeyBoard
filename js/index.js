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
        number.onclick = function(e) {
            let adress =  prompt("请输入网站地址")
            if(adress) {
                var json = JSON.parse(localStorage.getItem('adress') || 'null')  || {}
                json[this.textContent] = adress
                localStorage.setItem("adress",JSON.stringify(json))
                if (getBaseURL(this.textContent)) {
                    img.src = getBaseURL(this.textContent) + '/favicon.ico'
                    img.style.width = "16px"
                    img.style.height = "16px"
                }
            }
        }
        number.textContent = v
        let img = document.createElement("img")
        if (getBaseURL(v)) {
            img.src = getBaseURL(v) + '/favicon.ico'
            img.onload = function(e) {
                this.style.width = "16px"
                this.style.height = "16px"
            }
            img.onerror = function(e) {
                this.style.width = 0
                this.style.height = 0
            }
        }
        number.appendChild(img)
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
    createSpecial("↑", "arrow up special")
    createSpecial("←", "arrow special")
    createSpecial("↓", "arrow down special")
    createSpecial("→", "arrow special")

}

function getBaseURL(key){
    let json =  JSON.parse(localStorage.getItem('adress') || 'null') 
    if (json) {
        let url = json[key]
        return url ? 'http://'+url : undefined
    }
    return undefined

}

document.onkeypress = function(e) {
    if (getBaseURL(e.key.toUpperCase())) {
        window.open(getBaseURL(e.key.toUpperCase()), '_blank')

    }
   
}