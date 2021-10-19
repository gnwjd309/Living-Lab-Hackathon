import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import egg from "../../img/egg.png";
import broken_egg from "../../img/broken.png";

const Coupon_block = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
    text-align: center;
    img{
        height: 270px;
        width: 200px;
    }
`;

const changePic = () => {
    document.getElementById("event_img").src = {broken_egg};
    setTimeout(showPopup, 1000);
}

const showPopup = () => {
    var uri = "Popup.html";
    var width = 300;
    var height = 150;
    var center_left = (document.body.offsetWidth/2) - (width/2);
    var center_top = (document.body.offsetHeight/6) - (height/2);
    var option = "width=" + width + ", height=" + height + ", left=" + center_left + ", top=" + center_top 
    window.open(uri, "coupon", option);
}

const Coupon = () => {
    /*state = {
        shop_name: '브릿지 카페'
    };*/

    return (
        <div>
            <Fade bottom>
                <Coupon_block>
                    <h3>알이 도착했습니다!</h3>
                    <img onClick={changePic} id="event_img" src={egg}/><br />
                    <h3>알을 까고 브릿지 카페</h3>
                    <h3>쿠폰을 획득하세요!</h3>
                </Coupon_block>
            </Fade>
        </div>
    );
};

export default Coupon;