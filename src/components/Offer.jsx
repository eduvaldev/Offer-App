import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSelectProduct } from '../store/Actions/actions'
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
  const [select, setSelect] = useState('init');
  const filtros = useSelector(state => state.filtro);
  const ofert = useSelector(state => state.ofertSelect);
  const dispatch = useDispatch()

  const handleChange = (e) =>{
    console.log(e.target.value);
    setSelect(e.target.value);
    dispatch(getSelectProduct(e.target.value));

  }

  return ( 
    <ContainerOffer>
      <ContSelect>
        <h3>Ganancias reportadas:</h3>
        <div className="select">
          <select name="cars" id="cars" value={select} onChange={handleChange}>
            <option value="...">Filtro...</option>
            { 
              filtros.map( (option, id) => <option key={id} value={option} >{option}</option>)
            }
          </select>
        </div>
      </ContSelect>
      <ContText>
        <div>
          <h2>ID Oferta:</h2>
          { ofert !== null ? <p>{ofert.id}</p> : null}
        </div>
        <div>
          <h2>Nombre:</h2>
          { ofert !== null ? <p>{ofert.name}</p> : null}
        </div>
      </ContText>
    </ContainerOffer>
   );
}
 
export default Offer;