let historyOrder = document.getElementById("order-history-list");
let historyItems = [];

function createHistoryItem(name, price, imgSrc){
    let historyItem = document.createElement("div");
    historyItem.style.width="90%";
    historyItem.style.marginRight="auto";
    historyItem.style.marginLeft="auto";
    historyItem.style.marginBottom="10px";
    historyItem.style.color="black";
    historyItem.style.border="none";
    historyItem.style.borderRadius="15px";
    historyItem.style.borderBottom="1px solid gray";
    historyItem.style.backgroundColor="white";
    historyItem.style.fontSize="28px";
    let historyItem_img = document.createElement("img");
    let historyItem_text_div = document.createElement("div");
    let historyItem_text_text = document.createElement("p");
    let historyItem_text_price = document.createElement("p");
    let historyItem_text_date = document.createElement("p");
    historyItem.setAttribute("class","content-advanced-buyCard");
    historyItem_img.setAttribute("src",imgSrc);
    historyItem_text_div.setAttribute("class","content-historyCard-text");
    historyItem_text_text.innerHTML=`${name}`;
    historyItem_text_price.innerHTML=`$${price}`;
    historyItem_text_date.innerHTML=`${new Date().toLocaleDateString()}`;
    historyItem.appendChild(historyItem_img);
    historyItem_text_div.appendChild(historyItem_text_text);
    historyItem.appendChild(historyItem_text_div);
    historyItem_text_price.style.marginRight="20px";
    historyItem_text_price.style.marginTop="10px";
    historyItem.appendChild(historyItem_text_price);
    historyItem_text_date.style.marginRight="20px";
    historyItem_text_date.style.marginTop="10px";
    historyItem.appendChild(historyItem_text_date);
    return historyItem;
}

function getHistoryItems(){
    historyItems = JSON.parse(localStorage.getItem("historyItems"));
    if(historyItems === null || historyItems.length == 0){
        console.log("FUCK");
        let tempMessage = document.createElement("div");
        tempMessage.innerHTML = "<b>No items registered.</b>";
        tempMessage.style.textAlign="center";
        tempMessage.style.fontSize="30px";
        historyOrder.appendChild(tempMessage);
    } else{
        
        for (let item of historyItems){
            let tempHistoryItem = createHistoryItem(item.name, item.price, item.imgSrc, item.id);
            historyOrder.appendChild(tempHistoryItem);
        };
    }
}
getHistoryItems();

console.log(historyItems);