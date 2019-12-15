const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Post sql feedback 
router.post( '/', (req, res) => {
    const newFeedback = req.body
    console.log('req.body', req.body);
    //insert data
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4,)`;
    const values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments];
    console.log('values', values);
    //pool
    pool.query(sqlText, value)
        .then( (result) => {
            res.sendStatus();
        })
        .catch( (err) =>{
            console.log(`err making database query ${sqlText}`, err);
            res.sendStatus(500);
            
        })

}) 
module.exports = router;