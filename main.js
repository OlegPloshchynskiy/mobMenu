const MENU = document.createElement("div");
MENU.classList.add("menu");
let showMenu = document.createElement("img");
showMenu.src = "images/list.png";
let closeMenu = document.createElement("img");
closeMenu.src = "images/close.png";
let listMenu = document.createElement("ul");
console.log(listMenu);

listMenu.setAttribute(
    "style",
    "list-style: none; font-family: Arial; font-size: 23px; line-height: 40px; letter-spacing: 4px;"
);

closeMenu.setAttribute(
    "style",
    "cursor: pointer;"
)

showMenu.setAttribute(
    "style",
    "position: absolute; top: 30px; left: 60px; cursor: pointer;"
)

MENU.setAttribute(
    "style",
    "background: linear-gradient(to right, #8e2de2, #4a00e0); padding: 50px 60px; color: white; transform: translateY(-1000px); transition: .3s;"
)

let liOne = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
let liFour = document.createElement("li");
let liFive = document.createElement("li");
let liSix = document.createElement("li");
let liSeven = document.createElement("li");
let liEight = document.createElement("li");
let liNine = document.createElement("li");

liOne.textContent = "Opinion";
liTwo.textContent = "Economy";
liThree.textContent = "International";
liFour.textContent = "Society";
liFive.textContent = "Culture";
liSix.textContent = "Sports";
liSeven.textContent = "Technology";
liEight.textContent = "Science";
liNine.textContent = "Health";

MENU.appendChild(closeMenu);
listMenu.appendChild(liOne);
listMenu.appendChild(liTwo);
listMenu.appendChild(liThree);
listMenu.appendChild(liFour);
listMenu.appendChild(liFive);
listMenu.appendChild(liSix);
listMenu.appendChild(liSeven);
listMenu.appendChild(liEight);
listMenu.appendChild(liNine);
MENU.appendChild(listMenu);
document.body.appendChild(MENU);
document.body.appendChild(showMenu);

showMenu.addEventListener("click", function() {
    showMenu.style.display = "none";
    MENU.style.transform = "translateY(0)"
});

closeMenu.addEventListener("click", function() {
    showMenu.style.display = "block";
    MENU.style.transform = "translateY(-1000px)"
});