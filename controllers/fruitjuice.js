var fruitjuice = require('../models/fruitjuice');
// List of all fruitjuice items
exports.fruitjuice_list = function(req, res) {
 res.send('NOT IMPLEMENTED: fruitjuice list');
};

/**
 *exports.costume_detail = async function(req, res) {
 console.log("detail" + req.params.id)
 try {
 result = await Costume.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};
 */
// for a specific fruitjuice item.
exports.fruitjuice_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await fruitjuice.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle rfruitjuice  create on POST.


// Handle Costume create on POST.
exports.fruitjuice_create_post = async function(req, res) {
 console.log(req.body)
 let document = new fruitjuice();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.fruitjuice_type = req.body.fruitjuice_type;
 document.price = req.body.price;
 document.Quantity = req.body.Quantity;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};


// Handle Costume delete form on DELETE.
/**
exports.fruitjuice_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fruitjuice  delete DELETE ' + req.params.id);
};
 */
exports.fruitjuice_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await fruitjuice.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


// Handle Costume update form on PUT.
/** 
exports.fruitjuice_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: fruitjuice  update PUT' + req.params.id);
};
*/

exports.fruitjuice_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await fruitjuice.findById( req.params.id)
 // Do updates of properties
 if(req.body.fruitjuice_type)
 toUpdate.fruitjuice_type = req.body.fruitjuice_type;
 if(req.body.cost) toUpdate.price = req.body.price;
 if(req.body.size) toUpdate.Quantity = req.body.Quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// List of all Costumes
exports.fruitjuice_list = async function(req, res) {
    try{
    thefruitjuice = await fruitjuice.find();
    res.send(thefruitjuice);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.fruitjuice_view_all_Page = async function(req, res) {
    try{
    thefruitjuice = await fruitjuice.find();
    res.render('fruitjuice', { title: 'fruitjuice Search Results', results: thefruitjuice });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/*
   exports.bakery_view_all_Page = async function (req, res) {
    try {
        thebakery = await bakery.find();
        res.render('bakery', { title: 'bakery Search Results', results: thebakery });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
*/

// Handle a show one view with id specified by query
exports.fruitjuice_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await fruitjuice.findById( req.query.id)
        res.render('fruitjuicedetail', { title: 'fruitjuice Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async

// exports.costume_create_Page = function(req, res) {
//     console.log("create view")
//     try{
//     res.render('costumecreate', { title: 'Costume Create'});
//     }
//     catch(err){
//     res.status(500)
//     res.send(`{'error': '${err}'}`);
//     }
//    }



exports.fruitjuice_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('fruitjuicecreate', { title: 'fruitjuice Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};




// Handle building the view for updating a fish.
// query provides the id

// exports.fruitjuice_update_Page =  async function(req, res) {
//     console.log("update view for item "+req.query.id)
//     try{
//         let result = await fruitjuice.findById(req.query.id)
//         res.render('fruitjuiceupdate', { title: 'fruitjuice Update', toShow: result });
//     }
//     catch(err){
//         res.status(500)
//         res.send(`{'error': '${err}'}`);
        
//     }

// };
exports.fruitjuice_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await fruitjuice.findById(req.query.id)
    res.render('fruitjuiceupdate', { title: 'fruitjuice Update', toShow: result });
    }
    catch(err){
    res.status(500)
    //res.send(`{'error': '${err}'}`);
    }
   };



// Handle a delete one view with id from query
exports.fruitjuice_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await fruitjuice.findById(req.query.id)
        res.render('fruitjuicedelete', { title: 'fruitjuice Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};