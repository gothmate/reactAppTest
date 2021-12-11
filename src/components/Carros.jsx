import React,{useState} from 'react'

export default function Carros() {

  const [carro, useCarro] = useState('')

  return (
    <>
      <label>Escolha seu carro:</label>
      <select value={carro} name="fcarro" onChange={(e)=>useCarro(e.target.value)}>
        <option value=''>Selecione</option>
        <option value='Vivace'>Vivace</option>
        <option value='Corsa'>Corsa</option>
        <option value='Argo'>Argo</option>
        <option value='HB20'>HB20</option>
        <option value='C4'>C4</option>
      </select>
      <p>Carro escolhido: {carro}</p>
    </>
  )
}