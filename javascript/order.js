// 去結帳按鈕要做的事 👉打開及關閉order
const checkoutButton = document.querySelector(".cart__checkout-button");
const unCheckCart = () => {
    document.getElementById("cart-toggle").checked = false;
}
const checkOrder = () => {
    //open Order頁面 要加if else判斷
    // if 購物車不為空
        //👉post整筆訂單（cartItem array）到firebase

        //👉getData from firebase httpRequest （AJAX）
        // =>生成order__card 第一張卡片的資訊

        //👉open order頁面
        document.getElementById("order-toggle").checked = true;
    // else
        // 訊息購物車為空 
        //（有趣的發想）
        // 要滿足特定條件一天才能抽超過三張卡（推薦飲品）， 舉例如果三張卡片都捨棄
        // 想要在獲得推薦咖啡的卡片就要 付咖啡豆之類的
}
checkoutButton.addEventListener("click", checkOrder);
checkoutButton.addEventListener("click", unCheckCart);

//取消整筆訂單 order-toggle.checked = false 刪除 order__card 第一張卡片的資訊


//❤️修改購物車資訊（目前只有刪除購物車內物品按鈕）