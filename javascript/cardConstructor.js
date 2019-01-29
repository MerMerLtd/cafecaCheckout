let cardID = 0;
let cards = [];

const cardData = [
    {
        "product": "戴綠帽",
        "story": "與你一輩子相伴的憧憬，為此我奮不顧身，三個人的雙人舞，終究曲終人散。",
        "description": "可以試試看微苦的抹茶配上香醇的拿鐵，最好是無糖，適合一個人搭配著酸甜的覆盆子蛋糕服用。",
        "img": "./img/matchaCoffee.jpg",
        "price": 150,
        "store": "三%比率咖啡",
        "storeID": "TW00001",
        "music": ""
    },
    {
        "product": "一個人跳舞",
        "story": "與你一輩子相伴的憧憬，為此我奮不顧身，三個人的雙人舞，終究曲終人散。",
        "description": "可以試試看微苦的抹茶配上香醇的拿鐵，最好是無糖，適合一個人搭配著酸甜的覆盆子蛋糕服用。",
        "img": "./img/matchaCoffee.jpg",
        "price": 160,
        "store": "三%比率咖啡",
        "storeID": "TW00002",
        "music": ""
    },
    {
        "product": "窗邊看書",
        "story": "與你一輩子相伴的憧憬，為此我奮不顧身，三個人的雙人舞，終究曲終人散。",
        "description": "可以試試看微苦的抹茶配上香醇的拿鐵，最好是無糖，適合一個人搭配著酸甜的覆盆子蛋糕服用。",
        "img": "./img/matchaCoffee.jpg",
        "price": 170,
        "store": "三%比率咖啡",
        "storeID": "TW00003",
        "music": ""
    },
    {
        "product": "下雨天",
        "story": "與你一輩子相伴的憧憬，為此我奮不顧身，三個人的雙人舞，終究曲終人散。",
        "description": "可以試試看微苦的抹茶配上香醇的拿鐵，最好是無糖，適合一個人搭配著酸甜的覆盆子蛋糕服用。",
        "img": "./img/matchaCoffee.jpg",
        "price": 180,
        "store": "三%比率咖啡",
        "storeID": "TW00004",
        "music": ""
    },
    {
        "product": "普通的一天",
        "story": "與你一輩子相伴的憧憬，為此我奮不顧身，三個人的雙人舞，終究曲終人散。",
        "description": "可以試試看微苦的抹茶配上香醇的拿鐵，最好是無糖，適合一個人搭配著酸甜的覆盆子蛋糕服用。",
        "img": "./img/matchaCoffee.jpg",
        "price": 190,
        "store": "硬性格咖啡",
        "storeID": "TW00005",
        "music": ""
    },
];

// 卡片建構子
const card = () => {
    // cardID++;
    const node = document.createElement("div");
    node.className = "card";
    const side = document.createElement("div");
    side.className = "card__side";

    const coverRight = document.createElement("div");
    coverRight.className = "card__cover-right";
    const coverRightText = document.createElement("p");
    coverRightText.className = "card__cover-text";
    coverRightText.innerText = "一點也不誘人呢";
    const coverLeft = document.createElement("div");
    coverLeft.className = "card__cover-left";
    const coverLeftText = document.createElement("p");
    coverLeftText.className = "card__cover-text";
    coverLeftText.innerHTML = "看起來很不錯耶 &#9829;";
    
    const front = document.createElement("div");
    front.className = "card__side--front";
    const frontPad = document.createElement("div");
    frontPad.className = "card__pad";
    const frontTitle = document.createElement("h2");
    frontTitle.innerText = "Card " + cardID;
//   const frontContent = document.createElement("p");
    frontPad.innerHTML = '<p class="card__logo">&#9829;</p>';

    const back = document.createElement("div");
    back.className = "card__side--back";
    const backPad = document.createElement("div");
    backPad.className = "card__pad";

    const backImgBox = document.createElement("div");
    backImgBox.className = "card__img-box";
    const backImg = document.createElement("img");
    backImg.src = `${cardData[cardID].img}`;
    backImg.className = "card__img";

    const backTextBox = document.createElement("div");
    backTextBox.className = "card__text-box";
    const backTitle = document.createElement("h2");
    backTitle.className = "card__title";
    backTitle.innerText = `${cardData[cardID].product}`;
    const backContentStory = document.createElement("p");
    backContentStory.className="card__story";
    backContentStory.innerText = `${cardData[cardID].story}`;
    const backContentDescription= document.createElement("p");
    backContentDescription.className="card__description";
    backContentDescription.innerText = `${cardData[cardID].description}`;

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
    node.appendChild(coverRight);
    node.appendChild(coverLeft);
//   card.appendChild(side);
    side.appendChild(front);
    side.appendChild(back);

    coverRight.appendChild(coverRightText);
    coverLeft.appendChild(coverLeftText);

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
    cardID++;
    return node;
}



   

