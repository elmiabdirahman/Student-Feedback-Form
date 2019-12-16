const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get
router.get('/', (req, res) =>{
    console.log('in GET feedback');
    
    pool.query('SELECT * from "feedback" ORDER BY "id" desc;').then((result) =>{
        res.send(result.rows);
    }).catch((error) =>{
        console.log('ERROR in GET ', error);
        res.send(500)
        
    })
})


// Post sql feedback 
router.post( '/', (req, res) => {
    console.log('req.body', req.body);
    //insert data
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4,)`;
        pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.supported, req.body.comment])
        .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /feedback', error)
        res.sendStatus(500);
    });
 })
module.exports = router;