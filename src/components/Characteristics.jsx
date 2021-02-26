import React from 'react';
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
    margin-top: auto;

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
  return ( 
    <Caracteristicas>
      <h1>Caracteristicas</h1>
      <div>
        <div>
          Caraciteristica 1
        </div>
        <div></div>
      </div>
    </Caracteristicas>
   );
}
 
export default Characteristics;