
let index = 0;
// 卡片建構子
const cartItem = () => {
    const node = document.createElement("div");
    node.className = "cart-item__box";

    const backImg = document.createElement("img");
    backImg.src = `${cartItemData[index].img}`;
    backImg.className = "card__img";

    const backTitle = document.createElement("h2");
    backTitle.className = "card__title";
    backTitle.innerText = `${cartItemData[index].product}`;

    const backList = document.createElement("ul");
    backList.className = "card__list";

    const backItemPrice = document.createElement("li");
    backItemPrice.className = "card__item";
    const backItemPriceLabel = document.createElement("label");
    backItemPriceLabel.for = "card__price-toggle";
    const backItemPriceToggle = document.createElement("input");
    backItemPriceToggle.type= "checkbox";
    backItemPriceToggle.className = "card__price-toggle";
    const backItemPriceIcon = document.createElement("i");
    backItemPriceIcon.className = "fas fa-dollar-sign card__icon";
    backItemPriceLabel.innerText = "PRICE";
    const backItemPriceShow = document.createElement("span");
    backItemPriceShow.className = "card__price";
    
    const backItemPlace = document.createElement("li");
    backItemPlace.className = "card__item";
    const backItemPlaceLink = document.createElement("a");
    backItemPlaceLink.className = "card__link";
    const backItemPlaceIcon = document.createElement("i");
    backItemPlaceIcon.className = "fas fa-map-marker-alt card__icon";
    backItemPlaceLink.innerText = "LOCATION";

    const backItemPlay = document.createElement("li");
    backItemPlay.className = "card__item";
    const backItemPlayLabel = document.createElement("label");
    backItemPlayLabel.for = "card__music-toggle";
    const backItemPlayToggle = document.createElement("input");
    backItemPlayToggle.type= "checkbox";
    backItemPlayToggle.className = "card__music-toggle";
    const backItemPlayIcon = document.createElement("i");
    backItemPlayIcon.className = "far fa-play-circle card__icon";
    backItemPlayLabel.innerText = "MUSIC";

    node.appendChild(backImg);
    node.appendChild(backTitle);
    node.appendChild(backList);

    backList.appendChild(backItemPrice);
    backList.appendChild(backItemPlace);
    backList.appendChild(backItemPlay);

    backItemPrice.appendChild(backItemPriceLabel);
    backItemPriceLabel.appendChild(backItemPriceIcon);
    backItemPrice.appendChild(backItemPriceToggle);
    backItemPrice.appendChild(backItemPriceShow);

    backItemPlace.appendChild(backItemPlaceLink);
    backItemPlaceLink.appendChild(backItemPlaceIcon);

    backItemPlay.appendChild(backItemPlayLabel);
    backItemPlayLabel.appendChild(backItemPlayIcon);
    backItemPlay.appendChild(backItemPlayToggle);

    cartItems.push(node);
    index++;
    return node;
}


loadCart = n => {
    for(var i = 0; i < n; i++) {
        console.log("我被執行了")
        document.getElementsByClassName("cart-item__container").item(0).appendChild(cartItem());   
    }
}




   

