const title = document.querySelector('h1')
const what = document.querySelector('#what')

let rotate = false
let i = 0
const colors = ["green","orange","green","orange","blue","orange"]
function titleAction(){
    if(rotate){
        title.classList.remove('rotate')
        rotate = false
    }
    else{
        title.classList.add('rotate')
        rotate = true
    }
    title.style.color = colors[i]
    i++
    if(i >= colors.length){
        i = 0
    }
}

const translations = [[3,0],[3,3],[0,3],[-3,3],[-3,0],[-3,-3],[0,-3],[3,-3]]
let n = 0
function whatAction(){
    let x = translations[n][0]
    let y = translations[n][1]
    what.style.transform = `translate(${x}px,${y}px)`
    n++
    if(n >= translations.length){
        n = 0
    }
}


setInterval(titleAction,750)

setInterval(whatAction,50)