const express = require ('express');
const router = express.Router();
const Waybill = require('../models/waybill');

// Get Waybill Information
router.get('/api/waybill',function(req,res,next){
  console.log("This is GET request for Waybill Information");
  res.send({name: 'This is GET request for Waybill Information'});
  res.send(waybills)
});

// Create New Waybill manually without Schema or Model
/* router.post('/api/waybill',function(req,res){
  console.log("This is POST request to create new Waybill Information", req.body);
  res.send({
    type:'POST',
    sender_name: req.body.sender_name,
  	receiver_name: req.body.receiver_name,
	  sender_city: req.body.sender_city,
	  receiver_city : req.body.receiver_city,
	  weight : req.body.weight,
	  cost	: req.body.cost
    });
}); */

// Create New Waybill USING Schema or Model
router.post('/api/waybill', function(req,res,next){
  console.log("This is POST request to create new Waybill Information", req.body);
  //var waybill = new Waybill(req.body);
  // waybill.save();
  Waybill.create(req.body).then(function(waybill){
    res.send(waybill);
  }).catch(next);
  });
  /* res.send({
    type:'POST',
    sender_name: req.body.sender_name,
  	receiver_name: req.body.receiver_name,
	  sender_city: req.body.sender_city,
	  receiver_city : req.body.receiver_city,
	  weight : req.body.weight,
	  cost	: req.body.cost
  }); */


// Update Waybill Delivery Process Information
router.put('/api/waybill/:id',function(req,res,next){
  Waybill.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Waybill.findOne({_id:req.params.id}).then(function(waybill){
      res.send(waybill);
      res.send({name: 'This is PUT request for updating one Waybill Information'})
    });
    });
  console.log("This is PUT request for updating one Waybill Information");
});

// Delete Waybill Delivery Process Information
router.delete('/api/waybill/:id',function(req,res,next){
  Waybill.findByIdAndRemove({_id:req.params.id}).then(function(waybill){
    res.send(waybill)
  });
  console.log("This is DELETE request for one specific Waybill Information record.");
  console.log(req.params.id);
  res.send({name: 'This is DELETE request for one specific Waybill Information record.'});
});

module.exports = router;
