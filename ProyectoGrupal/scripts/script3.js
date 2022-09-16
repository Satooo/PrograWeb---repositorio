let content=document.getElementById("content");

let checkout=document.getElementById("list-checkout");

let possibleCheckoutItems=[];

let processorNum=0;
let buyNum=0;
let buySelection=0;
let componentsPrice=0;


let graphicItems=[{
    "name":"NVIDIA GeForce GTx",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx",
    "price":400,
    "img":"images/graphic.png"
}];
let processorItems=[{
    "name":"Intel I3",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I5",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I7",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I9",
    "price":400,
    "img":"images/processor.png"
}];
let memoryItems=[{
    "name":"RAM 4gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 8gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 16gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 32gb",
    "price":400,
    "img":"images/memory.png"
}];
let storageItems=[{
    "name":"Toshiba 500GB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 1TB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 2TB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 3TB",
    "price":400,
    "img":"images/storage.png"
}];
let coolerItems=[{
    "name":"Cooler 10",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 20",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 30",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 40",
    "price":400,
    "img":"images/cooler.png"
}];
let windowsItems=[{
    "name":"Windows 8 32bit AMD",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit AMD",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit Intel",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit Intel",
    "price":400,
    "img":"images/windows.png"
}];
let powersupplyItems=[{
    "name":"PowerSupply Base",
    "price":200,
    "img":"images/power.png"
},{
    "name":"PowerSupply Max",
    "price":200,
    "img":"images/power.png"
}];

let gamingComponents = [
    1,3,2,0,1,1,0
];
let designComponents = [
    2,3,3,0,1,1,1
];
let codingComponentes = [
    3,3,3,3,1,1,1
];
let renderingComponents = [
    3,2,2,3,1,1,1
];
let officeComponents = [
    0,1,1,3,1,0,0
];
let otherComponents = [
    0,1,1,3,1,0,0
];

let allItems=[
    graphicItems,processorItems,memoryItems,storageItems,coolerItems,windowsItems,powersupplyItems
]

function createCartItem(name, price,imgSrc){
    let cartItem = document.createElement("div");
    cartItem.style.width="90%";
    cartItem.style.marginRight="auto";
    cartItem.style.marginLeft="auto";
    cartItem.style.marginBottom="30px";
    let cartItem_img = document.createElement("img");
    let cartItem_text_div = document.createElement("div");
    let cartItem_text_text = document.createElement("p");
    let cartItem_text_price = document.createElement("p");
    let cartItem_button=document.createElement("button");
    cartItem.setAttribute("class","content-advanced-buyCard");
    cartItem_img.setAttribute("src",imgSrc);
    cartItem_text_div.setAttribute("class","content-advanced-buyCard-text");
    cartItem_text_price.setAttribute("class","content-advanced-buyCard-text-price");
    cartItem_button.setAttribute("class","content-advanced-buyCard-addButton");
    cartItem_text_text.innerHTML=`<b>${name}</b>`;
    cartItem_text_price.innerHTML=`${price}$`;
    cartItem_button.id="buy"+buyNum;
    cartItem_button.textContent="x";
    cartItem_button.addEventListener("click",()=>{
        cartItem.style.display="none";
    });
    cartItem.appendChild(cartItem_img);
    cartItem_text_div.appendChild(cartItem_text_text);
    cartItem_text_div.appendChild(cartItem_text_price);
    cartItem.appendChild(cartItem_text_div);
    cartItem.appendChild(cartItem_button);
    return cartItem;
}

function getPossibleCheckoutItems(){
    possibleCheckoutItems=JSON.parse(localStorage.getItem("checkoutItems"));
    console.log(possibleCheckoutItems);

    for (let item of possibleCheckoutItems){
        console.log(item);
        let tempCheckoutItem=createCartItem(item.name,item.price,item.imgSrc);
        checkout.appendChild(tempCheckoutItem);
    };
    
}
getPossibleCheckoutItems();

