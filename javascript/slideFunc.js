// ❤️❤️❤️❤️ 還需要加入轉場效果

//移動裝置滑動屏幕方向判斷
//https://www.itread01.com/content/1531751882.html
//The atan2() method returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians.(by w3s)

//返回角度
const getSlideAngle = (dx, dy) => Math.atan2(dy, dx)*180/Math.PI;//With atan2(), the y coordinate is passed as the first argument and the x coordinate is passed as the second argument.

//根據起點和終點返回方向判斷1:上，2:左，3:下，4:右，0:未滑動
const getSlideDirection = (startX, startY, endX, endY) => {
    let dy = startY - endY;//標準座標系與屏幕座標系的Y軸方向相反
    let dx = endX - startX;
    let result = 0;
    // console.log("dx: " + dx, "dy: " + dy);

    //如果滑動距離太短
    if(Math.abs(dx)<2 && Math.abs(dy)<2){
        return result;
    }

    let angle = getSlideAngle(dx, dy);
    // console.log("angle: " + angle);
    if(angle >= 45 && angle < 135){
        result = 1; //上
        // console.log("up");
    }else if((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)){
        result = 2; //左
        // console.log("left");
    }else if(angle >= -135 && angle < -45){
        result = 3;// 下
        // console.log("down");
    }else if(angle >= -45 && angle < 45){
        result = 4;// 右
        // console.log("right");
    }
    return result;
};

//滑動order__card ❤️ 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("order__card");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// 可以滑動換slide
const slideImgs = document.querySelectorAll(".order__card");
slideImgs.forEach( slideImg => {
    const touchSlidingImg = event => {
        event.preventDefault();
        if(event.targetTouches.length === 1){
            let touchPoint = event.targetTouches[0];
            let startX, startY, endX, endY, slideDirection;
            startX = touchPoint.pageX; 
            startY = touchPoint.pageY;

            document.ontouchmove = event => {
                // event.preventDefault();
                let touchPoint = event.targetTouches[0]
                endX = touchPoint.pageX; 
                endY = touchPoint.pageY;
            }

            document.ontouchend = () => {
                slideDirection = getSlideDirection(startX, startY, endX, endY);
                if(slideDirection === 2){
                    currentSlide(slideIndex+1);
                    console.log("left")
                }else if(slideDirection === 4){
                    currentSlide(slideIndex-1);
                    console.log("right");
                }else{
                    console.log("Nothing will happen");
                }
                document.ontouchend = null;
                document.ontouchmove = null;
            }
        }
    }
    slideImg.addEventListener("touchstart", touchSlidingImg, false);
});