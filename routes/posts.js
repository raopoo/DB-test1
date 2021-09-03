const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/',(req,res) => {
    db.any('SELECT * FROM posts;')
     .then(posts => {
         console.log(posts)
         res.render('pages/posts',{posts})
     })
     .catch(error => {
        console.log(error)
        res.send(error)
     })
})

router.get('/new',(req,res) => {
    res.render('pages/new-posts')
})

router.post('/new',(req,res) => {
    //insert data
    console.log(req.body)
  db.none('INSERT INTO posts(name, post) VALUES($1, $2);', [req.body.name, req.body.post])
  .then(() => {
    res.redirect('/posts')
  })
  .catch(error => {
    console.log(error)
    res.send(error)
  })
})
module.exports = router