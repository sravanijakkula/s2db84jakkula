/*
var express = require('express');
var router = express.Router();


const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
*/
var express = require('express');
const fruitjuice_controlers= require('../controllers/fruitjuice');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fruitjuice', { title: 'Search Results fruitjuice class' });
});



//var express = require('express');
//const fruitjuice_controlers= require('../controllers/fruitjuice');
var router = express.Router();
/* GET costumes */
router.get('/', fruitjuice_controlers.fruitjuice_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', fruitjuice_controlers.fruitjuice_view_one_Page);

/* GET create bakery page */
//router.get('/create',secured, fruitjuice_controlers.fruitjuice_create_Page);
router.get('/create',fruitjuice_controlers.fruitjuice_create_Page);


/* GET create update page */
//router.get('/update',secured, fruitjuice_controlers.fruitjuice_update_Page);
router.get('/update',fruitjuice_controlers.fruitjuice_update_Page);

/* GET create bakery page */
//router.get('/delete',secured, fruitjuice_controlers.fruitjuice_delete_Page);

router.get('/delete',fruitjuice_controlers.fruitjuice_delete_Page);

