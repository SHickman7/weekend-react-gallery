const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here

  const sqlText = `
    UPDATE "gallery" SET "likes"="likes"+1
    WHERE "id"=$1;
    `

    pool.query(sqlText, [req.params.id])
      .then((dbResult) => {
        res.sendStatus (200)
      })
      .catch((dbError) => {
        console.log ('PUT failed:', dbError)
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
