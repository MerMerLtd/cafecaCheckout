let cartItemID = 0;

// 卡片建構子
const cartItem = () => {
    // cartItemID++;
    const node = document.createElement("div");
    node.className = "card";
    const side = document.createElement("div");
    side.className = "card__side";
    
    const front = document.createElement("div");
    front.className = "card__side--front";
    const frontPad = document.createElement("div");
    frontPad.className = "card__pad";
    const frontTitle = document.createElement("h2");
    frontTitle.innerText = "CartItem" + cartItemID;
//   const frontContent = document.createElement("p");
    frontPad.innerHTML = '<p class="card__logo">&#9829;</p>';

    const back = document.createElement("div");
    back.className = "card__side--back";
    const backPad = document.createElement("div");
    backPad.className = "card__pad";

    const backImgBox = document.createElement("div");
    backImgBox.className = "card__img-box";
    const backImg = document.createElement("img");
    backImg.src = `${cartItems[cartItemID].img}`;
    backImg.className = "card__img";

    const backTextBox = document.createElement("div");
    backTextBox.className = "card__text-box";
    const backTitle = document.createElement("h2");
    backTitle.className = "card__title";
    backTitle.innerText = `${cartItems[cartItemID].product}`;
    const backContentStory = document.createElement("p");
    backContentStory.className="card__story";
    backContentStory.innerText = `${cartItems[cartItemID].story}`;
    const backContentDescription= document.createElement("p");
    backContentDescription.className="card__description";
    backContentDescription.innerText = `${cartItems[cartItemID].description}`;

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

    node.appendChild(side);

//   card.appendChild(side);
    side.appendChild(front);
    side.appendChild(back);

    front.appendChild(frontPad);
    frontPad.appendChild(frontTitle);
//   frontPad.appendChild(frontContent);
    back.appendChild(backPad);

    backPad.appendChild(backImgBox);
    backPad.appendChild(backTextBox);
    backPad.appendChild(backList);
    
    backImgBox.appendChild(backImg);
    backTextBox.appendChild(backTitle);
    backTextBox.appendChild(backContentStory);
    backTextBox.appendChild(backContentDescription);

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

    cards.push(node);
    cartItemID++;
    return node;
}


loadCart = n => {
    for(var i = 0; i < n; i++) {
        console.log("我被執行了")
        document.getElementsByClassName("cart__box").item(0).appendChild(cartItem());   
    }
}




   

