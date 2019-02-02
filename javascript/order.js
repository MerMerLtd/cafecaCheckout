// 去結帳按鈕要做的事 👉打開及關閉order
const checkoutButton = document.querySelector(".cart__checkout-button");
const unCheckCart = () => {
    document.getElementById("cart-toggle").checked = false;
}
const checkOrder = () => {
    //👉post整筆訂單（cartItem array）到firebase

    //👉getData from firebase httpRequest （AJAX）
    // =>生成order__card 第一張卡片的資訊

    //👉open Order頁面
    document.getElementById("order-toggle").checked = true;
}
checkoutButton.addEventListener("click", checkOrder);
checkoutButton.addEventListener("click", unCheckCart);

//取消整筆訂單 order-toggle.checked = false 刪除

//滑動order__card

//修改購物車資訊（目前只有刪除購物車內物品按鈕）