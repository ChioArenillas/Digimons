const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const digimonSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    evolucion:{
        type: String,
        required: true
    }
})

const digimon = mongoose.model("Digimon", digimonSchema, "Digimon")
module.exports = digimon