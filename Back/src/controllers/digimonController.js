const { find, newDigimonModel } = require("../mocks/digimonsMethodMongoDB")
const digimonsDB = require("../mocks/digimonsDB")
const digimonModel = require("../models/Digimon")

const getDigimons = (req, res) => {
    try{
        const allDigimons = find()
        console.log(allDigimons)
        res.status(200).json({
            digimons: allDigimons
        })
    }catch(error){
        res.status(500)
    }
}

const loadData = async (req, res) => {
    try{
     digimonsDB.map(async(digimon) => {
        const newDigimon = digimonModel({
            nombre: digimon.nombre,
            tipo: digimon.tipo,
            evolucion: digimon.evolucion
        })
        await newDigimon.save()
    })
    res.sendStatus(200)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getDigimons,
    loadData
}