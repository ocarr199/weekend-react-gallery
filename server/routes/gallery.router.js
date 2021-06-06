const express = require('express');
const router = express.Router();
const pool =require('../modules/pool')


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryItems = req.body
    console.log(req.body)
    const galleryId = req.params.id;
    console.log('the id is',galleryId)
    const queryText = `
    UPDATE "galleryItems" SET "likes" = "likes" +1 WHERE "id" = $1 ;
`;
const values = [ galleryId]
            pool.query(queryText, values)
            .then(result => {
                res.sendStatus(200)
            }).catch(err => {
                console.log(err)
                res.sendStatus(500)
            })
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