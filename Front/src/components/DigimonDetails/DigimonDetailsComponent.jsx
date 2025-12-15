import React, { useEffect, useState } from 'react'
import { getDigimon, deleteDigimon } from '@/api/digimonFetch'
import EditDigimonDetailsComponent from './EditDigimonDetailsComponent'

export default function DigimonDetailsComponent(props) {

    const { id, closeDigimonDetails, setDigimonHasChanged, digimonHasChanged } = props

    const [digimon, setDigimon] = useState({})
    const [isEditing, setIsEditing] = useState(false)


    useEffect(() => {
        const loadDigimon = async () => {
            const digimonAux = await getDigimon(id)
            setDigimon(digimonAux.data)
        }
        loadDigimon()
    }, [id])

    const initUpdateDigimon = () => {
        setIsEditing(true)

    }
    const handlerDeleteDigimon = () => {
        deleteDigimon(id)
        setDigimonHasChanged(!digimonHasChanged)
    }
    return (
        <div>
            {
                !isEditing ?
                    <div>
                        <h2>Digimon Details</h2>
                        <div>
                            <p>Nombre: {digimon.nombre}</p>
                            <p>Tipo: {digimon.tipo}</p>
                            <p>Evolucion: {digimon.evolucion}</p>
                        </div>
                        <div>
                            <button onClick={initUpdateDigimon}>Update Digimon</button>
                            <button onClick={handlerDeleteDigimon}>Delete Digimon</button>
                        </div>
                    </div>
                    :
                    <EditDigimonDetailsComponent id={id} digimon={digimon} 
                    setDigimonHasChanged={setDigimonHasChanged}
                    digimonHasChanged={digimonHasChanged}
                    closeDigimonDetails={closeDigimonDetails}/>
            }
            <div>
                <button onClick={closeDigimonDetails}>Cerrar</button>
            </div>
        </div>
    )
}
