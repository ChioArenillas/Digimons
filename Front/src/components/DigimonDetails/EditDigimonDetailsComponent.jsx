import { updateDigimon } from '@/api/digimonFetch'
import React, { useState } from 'react'

export default function EditDigimonDetailsComponent(props) {

    const { id, digimon, setDigimonHasChanged, closeDigimonDetails, digimonHasChanged } = props

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
    const guardarDigimon = async () => {
        await updateDigimon(id, JSON.stringify({
            nombre,
            tipo,
            evolucion
        }))
        setDigimonHasChanged(!digimonHasChanged)
        closeDigimonDetails()
    }
    return (
        <div>
            <h2>Editar Digimon</h2>
            <div>
                <h2>Digimon Details | Updating</h2>
                <div>
                    <div>
                    <span>Nombre: </span>
                    <input value={nombre} onChange={handlerOnChangeNombre} placeholder={digimon.nombre}/>
                    </div>
                    <div>
                    <span>Tipo: </span>
                    <input value={tipo} onChange={handlerOnChangeTipo} placeholder={digimon.tipo}/>
                    </div>                    <div>
                    <span>Evolucion: </span>
                    <input value={evolucion} onChange={handlerOnChangeEvolucion} placeholder={digimon.evolucion}/>
                    </div>
                    <div>
                        <button onClick={guardarDigimon}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
