const express = require('express');
const router = express.Router();
const pool =require('../modules/pool')
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
// 3. Trigger roter.get
router.get('/', (req, res) => {
    console.log("got to router")
    // 3. Server Get is triggered
    const queryText = `SELECT * FROM "galleryItems" ORDER BY "id";`
    // 4. SQL is Queried
    pool.query(queryText)
    .then(result => {
        // 5. Send Back Query Rows
        res.send(result.rows)
    }).catch(err => {
        console.error(err)
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;