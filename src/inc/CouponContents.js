import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import KakaoShareButton from "../Conponents/Contents/KakaoShareButton";
import "../font/font.css"

const Menu_block = styled.div`
    margin-top: 20%;
    margin-bootom: 50%;
    text-align: center;
    font-family: "font";
    img{
        height: 200px;s
        width: 200px;
    }
`;

class CouponContents extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <Menu_block>
                        <h2>Show Coupon Popup</h2>
                        <h3>친구에게 공유하고 한 번 더 도전해보세요!</h3>
                        <KakaoShareButton />

                        <button onclick="window.close()">다음에 하기</button>
                    </Menu_block>
                </Fade>
            </div>
        );
    }
}


export default CouponContents;