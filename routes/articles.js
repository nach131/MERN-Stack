const express = require('express');
const router = express.Router();
const Articles = require('../models/Articles')

//REQUEST GET ALL ARTICLES
router.get('/', (req, res) => {
  Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
});


//  REQUEST AND NEW ARTICLE
router.post('/add', (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname 
  });

  newArticle
  .save()
  .then(()=> res.json("El nuevo articulo fue añadido"))
  .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;