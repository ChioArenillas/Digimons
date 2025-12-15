import DigimonDetailsComponent from '@/components/DigimonDetails/DigimonDetailsComponent'
import React, { useEffect, useState } from 'react'
import { getAllDigimons } from '@/api/digimonFetch'
import CreateDigimonDetailsComponent from '@/components/DigimonDetails/CreateDigimonDetailsComponent'

export default function Home() {

  const [digimons, setDigimons] = useState([])
  const [digimonId, setDigimonId] = useState(null)
  const [digimonHasChanged, setDigimonHasChanged] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const getAllDigimonsAux = async () => {
    const digimonsAux = await getAllDigimons()
    setDigimons(digimonsAux.data)
  }

  useEffect(() => {
    getAllDigimonsAux()
  }, [])

  useEffect(() => {
    getAllDigimonsAux()
    setDigimonHasChanged(false)
    closeDigimonDetails()
  }, [digimonHasChanged])


  const handlerOnClick = (id) => {
    setDigimonId(id)
  }
  const closeDigimonDetails = () => {
    setDigimonId(null)
  }

  const handlerCreateDigimon =() => {
    setIsCreating(true)
  }
  const closeDigimonCreation = () => {
    setIsCreating(false)
  }

  return (
    <div>
      <h1>Digimons</h1>
      <div>
        {
          !isCreating 
          ?
          <button onClick={handlerCreateDigimon}>Crear Digimon</button>
          :
          <div>
            <CreateDigimonDetailsComponent
            setDigimonHasChanged={setDigimonHasChanged}
            digimonHasChanged={digimonHasChanged}
            closeDigimonCreation={closeDigimonCreation} />
          </div>
        }
      </div>
      {
        digimons && digimons.map((digimon, index) => {
          return <div key={index}>
            <span>{digimon.id}  |  </span>
            <span>{digimon.nombre}  |  </span>
            <span>
              <button onClick={() => { handlerOnClick(digimon.id) }}>Ver Digimon</button>
            </span>
          </div>
        })
      }
      <hr />
      {
        digimonId && <DigimonDetailsComponent id={digimonId} //si tienes el digimonId pinta el componente
          closeDigimonDetails={closeDigimonDetails}
          setDigimonHasChanged={setDigimonHasChanged} 
          digimonHasChanged={digimonHasChanged}/>
      }
    </div>
  )
}
