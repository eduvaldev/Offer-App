import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

//styled components
const Caracteristicas = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 20px;
  text-align: center;

  h1{
    margin-bottom: 20px;
  }

  & > div{
    width: 100%;
    height: 80%;
    max-height: 23%;
    margin-top: auto;
    overflow: scroll;

    & > div{
      width: 100%;
      height: 20%;
      border-radius: 15px;
      background-color: #F4F5F7;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
  }
`;

const Characteristics = () => {
  const caract = useSelector(state => state.characteristics)
  const [caracteristicas, setCaracteristicas] = useState(caract)

  return ( 
    <Caracteristicas>
      <h1>Caracteristicas</h1>
      <div>
        {caracteristicas.map( elemt => 
        <div>
          {elemt.id}
        </div>)}
      </div>
    </Caracteristicas>
   );
}
 
export default Characteristics;