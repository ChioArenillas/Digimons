import { createDigimon, updateDigimon } from '@/api/digimonFetch'
import React, { useState } from 'react'

export default function CreateDigimonDetailsComponent(props) {

    const { setDigimonHasChanged, closeDigimonCreation, digimonHasChanged } = props

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [evolucion, setEvolucion] = useState('')

    const handlerOnChangeNombre = (e) =>{
        setNombre(e.target.value)
    }
    const handlerOnChangeTipo = (e) =>{
        setTipo(e.target.value)
    }    
    const handlerOnChangeEvolucion = (e) =>{
        setEvolucion(e.target.value)
    }
    const crearDigimon = async () => {
        await createDigimon( JSON.stringify({
            nombre,
            tipo,
            evolucion
        }))
        setDigimonHasChanged(!digimonHasChanged)
        closeDigimonCreation()
    }
    return (
        <div>
            <div>
                <h2>Crear Digimon</h2>
                <div>
                    <div>
                    <span>Nombre: </span>
                    <input value={nombre} onChange={handlerOnChangeNombre}/>
                    </div>
                    <div>
                    <span>Tipo: </span>
                    <input value={tipo} onChange={handlerOnChangeTipo}/>
                    </div>                    <div>
                    <span>Evolucion: </span>
                    <input value={evolucion} onChange={handlerOnChangeEvolucion} />
                    </div>
                    <div>
                        <button onClick={crearDigimon}>Crear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
