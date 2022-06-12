const express = require('express');
const Inventory = require('../Models/Inventory');

const router = express.Router();

router.get('/item', (req, res) => {
    Inventory.find({}).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err.message);
    })
})

router.get('/item/:id', (req, res) => {
    const id = req.params.id;
    Inventory.find({ _id: id }).then(data => {
        res.send(data[0]);
    }).catch(err => {
        res.status(500).send(err.message);
    })
})

router.post('/item', (req, res) => {
    const item = new Inventory(req.body);
    item.save().then(() => {
        res.send('item added successfully')
    }).catch(err => {
        res.status(500).send(err.message);
    })
})
router.put('/item/:id', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.send('item updated successfully')
    }).catch(err => {
        res.status(500).send(err.message);
    })
})
router.delete('/item/:id', (req, res) => {
    Inventory.findByIdAndDelete(req.params.id).then(() => {
        res.send('items deleted successfully')
    }).catch(err => {
        res.status(500).send(err.message);
    })
})

module.exports = router;