const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  let itemId = req.params.id;
  const sqlText = `
    UPDATE "gallery" SET "likes" = "likes" + 1
    WHERE "id" = $1
    `
    const sqlValues = [itemId];

    pool.query(sqlText, sqlValues)
      .then((databaseResult) => {
        res.sendStatus (200)
      })
      .catch((databaseError) => {
        console.log ('PUT failed:', databaseError)
        res.sendStatus (500)
      })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery ORDER by title`;
  pool.query(sqlText)
    .then((result) => {
      console.log('Full result from server', result);
      console.log('Rows property in result from database', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    })
});

module.exports = router;
