//  to process user request only
const express = require("express")
const router = express.Router()
const Model = require("../models/fileModel")

// response code
// 200 - successsful
//  400 - client side errors
//  500 - server side errors

router.post("/add", (req, res) => {
  console.log(req.body)
  // then object bnate h new model

  // asynchronous function
  new Model(req.body)
    .save()
    // then - when successful
    .then((result) => {
      // jo bhi request krega wo database se data ayega
      console.log(result)
      // client k pass jo bhi data jayega
      res.json(result)
    })
    // when not succesful
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  // res.send('response from add');
})
// jitna data save kiya h wo sb nikalna
router.get("/getall", (req, res) => {
  // find - data dhund k lana h
  Model.find({})
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })
})
// res.send('response from getall');
router.get("/getbyemail/:email", (req, res) => {
  // print krega email ko
  console.log(req.params.email)
  // response krega
  // res.send('request for email')
  Model.findOne({ email: req.params.email })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.json(err)
    })
})

// delete
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

module.exports = router
