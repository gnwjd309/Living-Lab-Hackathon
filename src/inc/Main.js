import styled from "styled-components";
import MainContainer from "../Containers/MainContainer";
import Footer from "../Conponents/Footer/Footer";
import loadData from '../loadData'

const Main_block = styled.div`
  text-align: center;
`;

function Main() {
  return (
    <Main_block>
      <button onClick={loadData}>share</button>
      <MainContainer />
      <Footer />
    </Main_block>
  )
}

export default Main;