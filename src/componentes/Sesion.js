import React, { useState } from 'react'


 export const Sesion = ({ handleSubmited,handleStars}) => {

    const [usuario, setUsuario] = useState('')

    let jugador ={};

    const [estrella, setEstrella] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        jugador.usuario=usuario
        jugador.puntuacion=0
        handleSubmited(jugador)
        handleStars(estrella)
    }
    return (
        <section class="form-register">
        <div class="controls">
            <form onSubmit={handleSubmit}>
                <h4>INGRESE SU USUARIO</h4>
                <input
                  id=""
                  label="Ingrese usuario"
                  value ={usuario}
                  onChange = {e => setUsuario(e.target.value)}
                  required
                />
                <h4>INGRESE EL NUMERO DE ESTRELLAS</h4>
                  <input
                  id=""
                  label="Ingrese usuario"
                  value ={estrella}
                  onChange = {e => setEstrella(e.target.value)}
                  required
                />
                 <p class="block"><button className="boton">INGRESAR</button></p>
            </form>


        </div>
        </section>
    )
}