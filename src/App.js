import { useState } from "react";
import "./App.css";

const App = () => {

// const [color, setColor] = useState("rojo");
// const [mensajeDelBoton, setMensajeDelBoton] = useState("Poner fondo azul")

// const handleClick = () => {
//   color === "rojo" ? setColor("azul") : setColor("rojo");
//   mensajeDelBoton === "Poner fondo rojo" 
//     ? setMensajeDelBoton("Poner fondo azul") 
//     : setMensajeDelBoton("Poner fondo rojo") 
// }


// - form  
//   - input 
//   - checkbox
//   - select 
//   - radio 
//   - submit
// - boton 

// - cualquier elemento que escuche un evento 

  const [valorDelInput, setValorDelInput] = useState("")
  const [valorDelCheckbox, setValorDelCheckbox] = useState("NO")
  const [valorDelSelect, setValorDelSelect ] = useState(" ")
  const [valorDelRadio, setValorDelRadio] = useState(" ")

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  const handleChangeCheckbox = (e) => {
    e.target.checked 
      ? setValorDelCheckbox("SI") 
      : setValorDelCheckbox("NO")
  }

  const handleChangeSelected = (e) => {
    setValorDelSelect(e.target.value)
    console.log("Estas seleccionando un pais")
  }

  const handleChangeRadio = (e) => {
    setValorDelRadio(e.target.value)
    console.log("Estas seleccionando un animal")
  }

  return (
    <div>
    {/* <div className={color}>
      <button onClick={handleClick}>{mensajeDelBoton}</button>
    </div> */}

    <input type="text" name="nombre" onChange={handleChange}/>

    <p>Valor del input: <span>{valorDelInput}</span></p>

<label>Terminos y condiciones
    <input type="checkbox" name="terminos" onChange={handleChangeCheckbox}/>
  </label>

  <p>Acepta terminos y condiciones: <span>{valorDelCheckbox}</span></p>

  <label>Pais
    <select onChange={handleChangeSelected }>
      <option value="Argentina">Argentina</option>
      <option value="Brasil">Brasil</option>
      <option value="Chile">Chile</option>
    </select>
  </label>

  <p>Pais elegido: <span>{valorDelSelect}</span></p>

  <label>
    <input onChange={handleChangeRadio} type="radio" name="animal" value="Gato" />Gato
    <input onChange={handleChangeRadio} type="radio" name="animal" value="Perro" />Perro
  </label>

  <p>Animal elegido: <span>{valorDelRadio}</span></p>

    </div>
  )
}

export default App