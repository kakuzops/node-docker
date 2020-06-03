const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const oportunidadeSchema = new Schema({
    oportunidade: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        require: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('oportunidades', oportunidadeSchema);
