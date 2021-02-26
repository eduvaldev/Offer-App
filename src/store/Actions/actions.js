import { ADD_FILTROS, ADD_SELECT } from '../Constants/constants'


export function getFiltros(){
  return( dispatch =>{
    fetch("json/ofertas.json")
          .then( resp => resp.json())
          .then( datos =>{
            let oferts = []
            datos.map( elemt => {
              oferts.push(elemt.versions[0].id)
            })
            dispatch({
              type: ADD_FILTROS,
              payload: oferts
            })
          })
          .catch( err => {
            console.log(err)
          })
  })
}

export function getSelectProduct(id){
  return( dispatch =>{
    fetch("json/ofertas.json")
          .then( resp => resp.json())
          .then( datos =>{
            let select = datos.filter( elemet => elemet.versions[0].id === id);
            console.log(select[0].versions[0])
            dispatch({
              type: ADD_SELECT,
              payload: select[0].versions[0]
            })
          })
          .catch( err => {
            console.log(err)
          })
  })
}