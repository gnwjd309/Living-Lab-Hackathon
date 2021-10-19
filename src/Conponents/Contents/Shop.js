import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import map from "../../img/map.png";

const Shop_block = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
    text-align: center;
    img{
        height: 200px;
        width: 200px;
    }
`;

const Shop = () => {
    /*state = {
        shop_name: '브릿지 카페',
        call_number: '041-542-8686'
    };*/

    return (
        <div>
            <Fade bottom>
                <Shop_block>
                    <h3>온천동 장미마을의</h3>
                    <h1>브릿지 카페</h1>
                    <h3>를 방문해 보세요!</h3>
                    <img src={map}/>
                    <br /><br />
                    충청남도 아산시 시민로393번길 10-7, 1층 (온천동) <br /><br />
                    ☎️ 041-542-8686
                </Shop_block>
            </Fade>
        </div>
    );
};

export default Shop;