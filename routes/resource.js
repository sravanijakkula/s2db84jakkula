var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fruitjuice_controller = require('../controllers/fruitjuice');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/fruitjuice', fruitjuice_controller.fruitjuice_create_post);
// DELETE request to delete bakery.
router.delete('/fruitjuice/:id', fruitjuice_controller.fruitjuice_delete);
// PUT request to update bakery.
router.put('/fruitjuice/:id', fruitjuice_controller.fruitjuice_update_put);
// GET request for one bakery.
router.get('/fruitjuice/:id', fruitjuice_controller.fruitjuice_detail);
// GET request for list of all bakery items.
router.get('/fruitjuice', fruitjuice_controller.fruitjuice_list);
module.exports = router;