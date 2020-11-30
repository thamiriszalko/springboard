// 1
document.getElementById("container");
// 2
document.querySelector("#container");
// 3
document.getElementsByClassName("second");
// 4
document.querySelector("ol.third");
// 5
let containerDiv = document.querySelector("#container");
containerDiv.innerText = "Hello";
// 6
let footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
// 7
footerDiv.classList.remove("main");
// 8
let newLi = document.createElement("li");
// 9
newLi.innerText = "four"
// 10
let ulElement = document.querySelector("ul");
ulElement.appendChild(newLi);
// 11
let olLis = document.querySelectorAll("ol li");
for(let i = 0; i < olLis.length; i++){
    olLis[i].style.backgroundColor = "green";
}
// 12
footerDiv.remove();