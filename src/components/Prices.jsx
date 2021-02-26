import React from 'react';
import styled from 'styled-components';

//styled components
const ContPrice = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  display: grid;
  grid-template-columns: auto auto;

  div{
    display: flex;
    flex-direction: column;
    text-align: center;

    h2{
      margin-bottom: 20px; 
    }

    div{
      margin-top: auto;
      height: 80%;

      p{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25%;
      }

      span{
        padding: 5px 20px;
        border-radius: 10px;
        background-color: #F4F5F7;
      }
    }
  }
`;

const Prices = () => {
  return ( 
    <ContPrice>
      <div>
        <h2>Tipo de Precio</h2>
        <div>
          <p>Precio Base: </p>
          <p>Impuesto Iva: </p>
          <p>Impuesto Otros: </p>
          <p>Precio de Venta: </p>
        </div>
      </div>
      <div>
        <h2>Monto</h2>
        <div>
          <p> <span>100.000</span> </p>
          <p> <span>300</span> </p>
          <p> <span>200</span> </p>
          <p> <span>150.000</span> </p>  
        </div>
      </div>
    </ContPrice>
   );
}
 
export default Prices;