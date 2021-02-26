import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

//styled components
const ContPrice = styled.div`
  width: 100%;
  height: 30%;
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

  const price = useSelector(state => state.prices)
  const [allprices, setAllprices] = useState(price)

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
          <p> <span>{allprices[0].versions[0].price.amount} {allprices[0].versions[0].price.units.name}</span> </p>
          <p> <span>{allprices[1].versions[0].price.amount} {allprices[0].versions[0].price.units.name}</span> </p>
          <p> <span>{allprices[2].versions[0].price.amount} {allprices[0].versions[0].price.units.name}</span> </p>
          <p> <span>{allprices[3].versions[0].price.amount} {allprices[0].versions[0].price.units.name}</span> </p>  
        </div>
      </div>
    </ContPrice>
   );
}
 
export default Prices;