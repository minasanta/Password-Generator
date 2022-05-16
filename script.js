const chars = ['a','b','c','d','e','f','g','h','l','m','n','o','y','t','r','t','p','x','z','1','2','3','4','5','6','8','9','7','@','!','%','$','#','&','<','>','?'] //14
const btn = document.getElementById('generate')
const p1 = document.getElementById('firstPWD')
const p2 = document.getElementById('secondPWD')
const p3 = document.getElementById('thirdPWD')
const p4 = document.getElementById('fourstPWD')

function upadatePWD(firstPWD,secondPWD,thirdPWD,fourthPWD) 
{
    p1.textContent = ''
    for (let index = 0; index < firstPWD.length; index++) {
        p1.textContent += firstPWD[index]
    }
    p2.textContent = ''
    for (let index = 0; index < secondPWD.length; index++) {
        p2.textContent += secondPWD[index]
    }
    p3.textContent = ''
    for (let index = 0; index < thirdPWD.length; index++) {
        p3.textContent += thirdPWD[index]
    }
    p4.textContent = ''
    for (let index = 0; index < fourthPWD.length; index++) {
        p4.textContent += fourthPWD[index]
    }
}


function generatePWD() 
{
    let firstPWD = []
    let secondPWD = []
    let thirdPWD = []
    let fourthPWD = []
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 4; j++) {
            let random = Math.floor(Math.random() * chars.length )
            if(j === 0) {firstPWD.push(chars[random])}
            else if (j === 1) {secondPWD.push(chars[random])}
            else if (j === 2) {thirdPWD.push(chars[random])}
            else {fourthPWD.push(chars[random])}
        }
    }
    upadatePWD(firstPWD,secondPWD,thirdPWD,fourthPWD)
}