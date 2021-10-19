import React from "react";
import styled from "styled-components";

const Popup_block = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
    text-align: center;
    img{
        height: 200px;
        width: 200px;
    }
`;

const Popup = () => {
    return (
        <div>
            <Popup_block>
                <h2>Show Coupon Popup</h2>
                <h3>친구에게 공유하고 한 번 더 도전해보세요!</h3>
                <input type="button" value="공유하기"/>
                <input type="button" value="다음에 하기" onclick="self.close()"/>
            </Popup_block>
        </div>
    );
};

export default Popup;