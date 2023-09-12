var express = require('express');
var router = express.Router();
var films = require("../films");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', films });
});


router.get("/:id", (req, res) => {
  const found = films.some(film => film.id === parseInt(req.params.id))
  console.log(found);
  if (found){
    const film = films.filter(film => film.id === parseInt(req.params.id))
    const count = films.length
    console.log(count);
    console.log(film[0].id);
    res.render('film', { film :film, count })
  }else{
    return res.status(400).json({ msg:"invalid" })
  }
})

module.exports = router;
