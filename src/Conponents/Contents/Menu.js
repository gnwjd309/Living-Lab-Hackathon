import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import menu from "../../img/menu.png";

const Menu_block = styled.div`
    margin-top: 20%;
    margin-bootom: 50%;
    text-align: center;
    img{
        height: 200px;
        width: 200px;
    }
`;

const Menu = () => {
    /*state = {
        menu: '아메리카노',
        menu_type: '한 잔',
    };*/

    return (
        <div>
            <Fade bottom>
                <Menu_block>
                    <h3>오늘은</h3>
                    <h1>아메리카노</h1>
                    <h3>한 잔 어떠신가요?</h3>
                    <img src={menu}/>
                    <h3>x,000원</h3>
                </Menu_block>
            </Fade>
        </div>
    );
};

export default Menu;