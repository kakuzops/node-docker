const express = require('express');
const router = express.Router();

const oportunidade = require('../App/models/Oportunidade');


router.get('/', (req, res) => {
    oportunidade.find()
        .then(oportunidade => {
            res.json(oportunidade);
        })
        .catch(error => res.status(500).json(error));
});

router.post('/novo', (req, res) => {
    const novaOportunidade = new oportunidade({
        oportunidade: req.body.oportunidade,
        tipo: req.body.tipo,
        valor_total: req.body.valor_total,
    });
    novaOportunidade
        .save()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.delete('/delete/:id', (req, res) => {
    oportunidade.findOneAndDelete({
            _id: req.params.id
        })
        .then(oportunidade => {
            res.json(oportunidade);
        })
        .catch(error => res.status(500).json(error));
});

module.exports = router;