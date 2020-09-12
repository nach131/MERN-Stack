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
    .then(() => res.json("El nuevo articulo fue añadido"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


// REQUEST FIND ARTICLES BY ID
router.get('/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then(article => res.json(article))
})


// REQUEST FIND ARTICLE BY ID AND UPDATE
router.put('/update/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then(article => {
      article.title = req.body.title,
        article.article = req.body.article,
        article.authorname = req.body.authorname,

        article
          .save()
          .then(() => res.json("El Articulo fue Acualizado"))
          .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// REQUEST FIND ARTICLE BY ID AND DELETE
router.delete('/:id', (req, res) => {
Articles.findByIdAndDelete(req.params.id)
.then(()=> res.json("El articull fue eliminado"))
.catch(err => res.status(400).json(`Error: ${err}`)); 
})

module.exports = router;