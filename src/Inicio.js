import React from 'react';
import { useState } from 'react';
import { Juego } from './componentes/Juego';
import { Sesion } from './componentes/Sesion';
import './App.css';
import { Usuarios } from './componentes/Usuarios';
import { ListaDeUsuario } from './componentes/ListaDeUsuario';


const Inicio = () => {
  const [gameId, setGameId] = useState(1);
  const [logeado, setLogeado] = useState(false)
  
  const [nuevoJugador, setNuevoJugador] = useState(Usuarios)
  
  const [nuevaEstrella, setNuevaEstrella] = useState(0)

  const añadirJugador = (jugador) => {
    setNuevoJugador([...nuevoJugador, jugador])
    //console.log(nuevoJugador);
    setLogeado(true)
  }
  const añadirEstrellas = (cantidad) =>{
    setNuevaEstrella(cantidad)
  }
  return( 

  <>
    {
      logeado === true ? (
        <Juego key={gameId} 
        startNewGame={() => setGameId(gameId + 1)} 
        nuevoJugador= {nuevoJugador} 
        estrella ={nuevaEstrella}
        setLogeado={setLogeado}
        onSubmit={añadirJugador}/>
      
      ) :(
      <Sesion handleSubmited = {añadirJugador}
              handleStars = {añadirEstrellas}
      ></Sesion>
    ) 
  }
  <div>
  <ListaDeUsuario nuevoJugador = {nuevoJugador}></ListaDeUsuario>
  </div>
  </>
  
  );
}

// Colores
export const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};
export default Inicio;