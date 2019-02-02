
let cartItemID = 0;

// 卡片建構子
const cartItem = () => {
   
}


loadCart = n => {
    for(var i = 0; i < n; i++) {
        console.log("我被執行了")
        document.getElementsByClassName("cart__box").item(0).appendChild(cartItem());   
    }
}




   

