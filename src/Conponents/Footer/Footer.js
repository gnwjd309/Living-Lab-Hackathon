import React from "react";
import styled from "styled-components";

const Block = styled.div`
  z-index: 1;
  bottom: 0px;
  position: relative;
  background: #7510f7;
  height: 50px;
  padding: 50px;
  strong {
    font-weight: 200;
    color: white;
    font-size: 20px;
  }
`;

const FooterText = styled.div`
  margin-bottom: 50px;
`;

const Footer = () => {
  return (
    <Block>
      <FooterText>
        <strong>
          ... Made by Hoojeong ... <br />
          ...   v2.0   ...
        </strong>
      </FooterText>
    </Block>
  )
}

export default Footer;