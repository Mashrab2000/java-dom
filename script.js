// let ota = document.querySelector(".ona")
// let h1 = document.createElement("h1")
// h1.innerHTML = "salomlar"
// ota.append(h1)


let ism = prompt("ism?")
let yosh = prompt("yosh?")
let ball = prompt("ball?")

let card = document.querySelector(".card")
let h1 = document.createElement("h1")
h1.innerHTML = ism
let h2 = document.createElement("h1")
h2.innerHTML = yosh
let h3 = document.createElement("h1")
h3.innerHTML = ball
let h4 = document.createElement("h1")
if(ball>= 70){
    h4.innerHTML = "Siz imtihondan o'tdiz"
    h4.style.color = "green"
}else if(ball<70){
    h4.innerHTML = "Siz imtihondan o'tolmadiz, hahaha"
    h4.style.color = "red"
}
card.append(h1, h2, h3, h4)