
export const getAllDigimons = async () => {
    const response = await fetch("http://localhost:9000/digimons")
    const digimons = await response.json()
    return digimons
}

export const getDigimon = async (id) => {
    const response = await fetch("http://localhost:9000/digimons/"+id)
    const digimons = await response.json()
    return digimons
}

export const deleteDigimon = async (id) =>{
    const response = await fetch ('http://localhost:9000/digimons/'+id, {
        method: 'DELETE'
    })
    const digimonDelete = await response.json()
    if(digimonDelete.error) console.log(digimonDelete.error)
        console.log('todo fue bien')
        return
}

export const updateDigimon = async (id, bodyParam) => {
    const response = await fetch('http://localhost:9000/digimons/'+id,{
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: bodyParam
    })
    const digimonUpdated = await response.json()
    if(digimonUpdated.error) console.log(digimonUpdated.error)
        console.log(digimonUpdated)
        return

}

export const createDigimon = async (bodyParam) => {
    const response = await fetch('http://localhost:9000/digimons/',{
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: bodyParam
    })
    const digimonCreated = await response.json()
    if (digimonCreated.error) console.log(digimonCreated.error)
        console.log(digimonCreated)
        return

}
