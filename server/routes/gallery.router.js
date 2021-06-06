const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// PUT Route
router.put('/like/:id', (req, res) => {
    // recieve post id
    const galleryId = req.params.id;
    //   add 1 to likes where the id = galleryId
    const queryText = `
    UPDATE "galleryItems" SET "likes" = "likes" +1 WHERE "id" = $1 ;
`;
    pool.query(queryText, [galleryId])
        .then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
}); // END PUT Route

// GEt router
router.get('/', (req, res) => {
    // select everything
    const queryText = `SELECT * FROM "galleryItems" ORDER BY "id";`
    pool.query(queryText)
        .then(result => {
            // 5. Send Back data
            res.send(result.rows)
        }).catch(err => {
            console.error(err)
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    //destructure keys out of req.body
    const {
        title,
        path,
        description
    } = req.body;
    const queryText = `
        INSERT INTO "galleryItems" (title, path, description)
        VALUES ($1, $2, $3);
    `
    const values = [title, path, description];
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201)
        }).catch(err => {
            console.error(err)
            res.sendStatus(500);
        })

})
// End POST Route

// Delete Route
router.delete('/:id', (req, res) => {
    const deleteID = req.params.id
    // delete item with id of deleteId
    const queryText = `DELETE FROM "galleryItems" WHERE "id" = $1;`
    pool.query(queryText, [deleteID])
        .then(result => {
            res.sendStatus(204)
        }).catch(err => {
            console.error(err)
            res.sendStatus(500);
        })
})
// End Delete Route

module.exports = router;