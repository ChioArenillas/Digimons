const digimonsDB = require("../mocks/digimonsDB")
const digimonModel = require("../models/Digimon")

//GET ALL DIGIMONS
const getDigimons = async (req, res) => {
    try{

        const allDigimons = await digimonModel.find()
        const resDigimon = allDigimons.map(digimon => {
            return {
                id: digimon.id,
                nombre: digimon.nombre
            }
        })
        res.status(200).json({
            status: 'succeeded',
            data: resDigimon,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

//GET DIGIMON BY ID
const getDigimonById = async (req, res) => {
    try{
        const id = req.params.id
        const digimon = await digimonModel.findById(id)
        console.log(digimon)
        res.status(200).json({
            status: 'succeeded',
            data: digimon,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

const createDigimon = async (req,res) => {
    try{
        const digimonData = req.body
        const newDigimon = await digimonModel({
            nombre: digimonData.nombre,
            tipo: digimonData.tipo,
            evolucion: digimonData.evolucion
        })
        await newDigimon.save()
        console.log(newDigimon)
        res.status(200).json({
            status: 'succeeded',
            data: newDigimon,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}


const updateDigimon = async (req,res) => {
    try{
        const id = req.params.id
        const {nombre, tipo, evolucion} = req.body
        
        const digimonAux = await digimonModel.findById(id)

        if(!digimonAux) return res.status(404).send('El digimon no existe')
        
        if(nombre) {
            digimonAux.nombre = nombre
        }
        if(tipo){
            digimonAux.tipo = tipo
        }
        if(evolucion){
            digimonAux.evolucion = evolucion
        }

        await digimonAux.save()

        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

const deleteDigimon = async (req,res) => {
    try{
        const id = req.params.id
        await digimonModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

//Load initial data
const loadData = async (req, res) => {   
    try{
        digimonsDB.map(async (digimon) => {
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
    getDigimonById,
    createDigimon,
    updateDigimon,
    deleteDigimon,
    loadData,
}