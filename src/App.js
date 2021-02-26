import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFiltros } from './store/Actions/actions'
import styled from 'styled-components';
//import componets
import Offer from './components/Offer';
import Prices from './components/Prices';
import Characteristics from './components/Characteristics';

//styled components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F4F5F7;
  padding: 50px;
`;

const ContPrin = styled.div`
  display: flex;
  width: 100%;
  height: 380px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
`;


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFiltros())
  }, [])

  return (
    <Container >
      <Offer />
      <ContPrin>
        <Characteristics />
        <Prices />
      </ContPrin>
    </Container>
  );
}

export default App;
