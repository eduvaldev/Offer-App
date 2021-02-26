import React from 'react';
import styled from 'styled-components';

//styled components
const ContainerOffer = styled.div`
  width: 100%;
  height: 160px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const ContSelect = styled.div`
  width: 40%;
  height: 100%;
  text-align: center;

  h3{
    margin-bottom: 10px;
  }

  div{
    position: relative;

    select{
      width: 200px;
      height: 57px;
      border: none;
      background-color: #F6F7F9;
      border-radius: 10px;
      padding: 0 20px;
      appearance: none;
      font-weight: 700;
    }

    &:before{
      content: '\f078';
      position: absolute;
      top: 30%;
      right: 40%;
      width: 16px;
      height: 16px;
      font-size: 16px;
      font-family: "Font Awesome 5 Free"; 
      font-weight: 900;
      pointer-events: none;
    }
  }
`;

const ContText = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;

    h2{
      width: 120px;
    }

    p{
      margin-left: 20px;
      background-color: #F6F7F9;
      border-radius: 10px;
      padding: 5px 10px;
    }
  }
`;

const Offer = () => {
  return ( 
    <ContainerOffer>
      <ContSelect>
        <h3>Ganancias reportadas:</h3>
        <div className="select">
          <select name="cars" id="cars">
            <option value="...">Filtro...</option>
            <option value="mes1">Último mes</option>
            <option value="mes2">Últimos 3 meses</option>
            <option value="mes3">Últimos 6 meses</option>
          </select>
        </div>
      </ContSelect>
      <ContText>
        <div>
          <h2>ID Oferta:</h2>
          <p>Algo</p>
        </div>
        <div>
          <h2>Nombre:</h2>
          <p>Oferta 1</p>
        </div>
      </ContText>
    </ContainerOffer>
   );
}
 
export default Offer;