const orderInfo = document.querySelector("#orderInfo");
const buttonOrder = document.querySelector("#order");
const title = document.querySelector("#container > h2");

buttonOrder.addEventListener("click", () => {
    let newP = document.createElement("p");
    let textNode = document.createTextNode(title.innerText);

    newP.appendChild(textNode);
    orderInfo.appendChild(newP);

}, {once: true});

