import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../../font/font.css"

const Shop_block = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
    text-align: center;
    font-family: "font";
    img{
        height: 200px;
        width: 200px;
    }
`;

const Map_block = styled.div`
    width: 70%;
    height: 300px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: medium;
    border-color: #D8D8D8;
  }
`;

const Shop = () => {
    /*state = {
        shop_name: '브릿지 카페',
        call_number: '041-542-8686'
    };*/

    const new_script = src => { 
        return new Promise((resolve, reject) => { 
          const script = document.createElement('script'); 
          script.src = src; 
          script.addEventListener('load', () => { 
            resolve(); 
          }); 
          script.addEventListener('error', e => { 
            reject(e); 
          }); 
          document.head.appendChild(script); 
        }); 
      };
      useEffect(() => { 
        //카카오맵 스크립트 읽어오기
        const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=11fe89c0d213e4d0087e1fab1aeeb7c4');
        
        //스크립트 읽기 완료 후 카카오맵 설정
        my_script.then(() => { 
          console.log('script loaded!!!');  
          const kakao = window['kakao']; 
          kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const options = { 
              center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
              level: 3 
            }; 
            const map = new kakao.maps.Map(mapContainer, options); //맵생성
            //마커설정
            const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
            const marker = new kakao.maps.Marker({ 
              position: markerPosition
            }); 
            marker.setMap(map); 
          });   
        }); 
      }, []);

    return (
        <div>
            <Fade bottom>
                <Shop_block>
                    <h2>온천동 장미마을의</h2>
                    <h1>브릿지 카페</h1>
                    <h2>를 방문해 보세요!</h2>
                    <Map_block id="map" />
                    <br /><br />
                    충청남도 아산시 시민로393번길 10-7, 1층 (온천동) <br /><br />
                    ☎️ 041-542-8686
                </Shop_block>
            </Fade>
        </div>
    );
};

export default Shop;