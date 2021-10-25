import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../../font/font.css"

const Menu_block = styled.div`
    margin-top: 20%;
    margin-bootom: 50%;
    text-align: center;
    font-family: "font";
    img{
        height: 200px;
        width: 200px;
    }
`;

const Menu = () => {
    return (
        <div>
            <Fade bottom>
                <Menu_block>
                    <h3>오늘은</h3>
                    <h1>아메리카노</h1>
                    <h3>한 잔 어떠신가요?</h3>
                    <img src="/img/menu.png"/>
                    <h3>x,000원</h3>
                </Menu_block>
            </Fade>
        </div>
    );
};

export default Menu;