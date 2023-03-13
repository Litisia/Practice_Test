// let example = document.querySelector(".example");
// let menuList = document.querySelector(".menu-list");


// let stor = [
//     cartInfo = {
//         imgSrs: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c83610d0bfae_17e217cd-dc2e-2555-87ff-dff7b242e000-p-500.jpeg",
//         h2: "Блюдо для завтрака",
//         p: "Ломтик хлеба из заварного теста с яйцом, сыром фета, сыром чеддер, оливками, маслом, медом, джемом, помидором, огурцом и 1",
//     },
//     cartInfo = {
//         imgSrs: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c8bc18d0c079_17e217df-f54e-4172-8d51-52816af79000-p-500.jpeg",
//         h2: "Белковый завтрак",
//         p: "Цельный ржаной хлеб из закваски, авокадо, яйца, сыр фета, оливки, помидоры, огурцы и огородная зелень",
//     },
// ]

// for (let i = 0; i < stor.length; i++) {
//     let exampleClon = example.cloneNode(true);
//     exampleClon.querySelector("img").setAttribute("src", stor[i].imgSrs);
//     exampleClon.querySelector("h2").innerText = stor[i].h2;
//     exampleClon.querySelector("p").innerText = stor[i].p;
//     menuList.appendChild(exampleClon);
// }


let menu = [
    {
        name: "Полезный завтрак",
        about: "Цельнозерновой ржаной хлеб из закваски, омлет из яичных белков, гранола",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c800bcd0bfad_17e217d3-b466-8861-8e6b-c3658c931000-p-500.jpeg"
    },

    {
        name: "Блюдо для завтрака",
        about: "Ломтик хлеба из заварного теста с яйцом, сыром фета, сыром чеддер, оливками, маслом, медом, джемом, помидором, огурцом и 1 чашкой чая",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c83610d0bfae_17e217cd-dc2e-2555-87ff-dff7b242e000-p-500.jpeg"
    },

    {
        name: "Белковый завтрак",
        about: "Цельный ржаной хлеб из закваски, авокадо, яйца, сыр фета, оливки, помидоры, огурцы и огородная зелень",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c8bc18d0c079_17e217df-f54e-4172-8d51-52816af79000.jpeg"
    },

    {
        name: "Завтрак на 2 персоны",
        about: "Разнообразный завтрак с неограниченным чаем на 2 персоны (суббота и воскресенье)",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c814bcd0c04e_17d5c9ce-8c60-6441-8aa1-e597506f7000.jpeg"
    },

    {
        name: "Полезный завтрак",
        about: "Цельнозерновой ржаной хлеб из закваски, омлет из яичных белков, гранола",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c800bcd0bfad_17e217d3-b466-8861-8e6b-c3658c931000-p-500.jpeg"
    },

    {
        name: "Блюдо для завтрака",
        about: "Ломтик хлеба из заварного теста с яйцом, сыром фета, сыром чеддер, оливками, маслом, медом, джемом, помидором, огурцом и 1 чашкой чая",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c83610d0bfae_17e217cd-dc2e-2555-87ff-dff7b242e000-p-500.jpeg"
    },

    {
        name: "Белковый завтрак",
        about: "Цельный ржаной хлеб из закваски, авокадо, яйца, сыр фета, оливки, помидоры, огурцы и огородная зелень",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c8bc18d0c079_17e217df-f54e-4172-8d51-52816af79000.jpeg"
    },

    {
        name: "Завтрак на 2 персоны",
        about: "Разнообразный завтрак с неограниченным чаем на 2 персоны (суббота и воскресенье)",
        image: "https://uploads-ssl.webflow.com/634c636e7000c8d089d0bb82/634c636e7000c814bcd0c04e_17d5c9ce-8c60-6441-8aa1-e597506f7000.jpeg"
    },
   
   
];

let menuList = document.querySelector(".menu-list");  // Обращаемся ко всему блоку где будут карточки

for (let i = 0; i < menu.length; i++) {
    let menuItem = document.createElement("div");  
    menuItem.classList.add("menu-cart");

    let img = document.createElement("img");
    img.setAttribute("src", menu[i].image);
    menuItem.appendChild(img);

    let cartText = document.createElement("div");
    cartText.classList.add("cart-text");

    let h2 = document.createElement("h2");
    h2.innerText = menu[i].name;
    cartText.appendChild(h2);

    let p = document.createElement("p");
    p.innerText = menu[i].about;
    cartText.appendChild(p);

    menuItem.appendChild(cartText);
    menuList.appendChild(menuItem);
};


