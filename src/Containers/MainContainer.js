import React from "react";
import styled from "styled-components";
import Menu from "../Conponents/Contents/Menu";
import Shop from "../Conponents/Contents/Shop";
import Coupon from "../Conponents/Contents/Coupon";

const Block = styled.div`
  padding-top: 55px;
  background: #ffffff;
`;

const MainContainer = () => {
    return (
        <Block>
            <Menu />
            <Shop />
            <Coupon />
        </Block>
    )
}

export default MainContainer;