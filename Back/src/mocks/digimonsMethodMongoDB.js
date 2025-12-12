const digimonsDB = require("./digimonsDB")

const find = (id) => {
    if(!id) {
        console.log(digimonsDB)
        return digimonsDB
    }else{
        const digimon = digimonsDB.find(d => d.id == id)
        return digimon
    }
}


const newDigimonModel = (id, nombre, tipo, evolucion ) => {
    digimonsDB.push({
        id, nombre, tipo, evolucion
    })
}


module.exports = { find, newDigimonModel}