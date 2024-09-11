const express= require ("express");
const router = express.Router();

const Person = require("./../models/person");


router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      res.status(200).json(response);
      console.log("data saved!!!");
    } catch (err) {
      res.status(500).json({ error: "internal server error" });
      console.log(err);
    }
  });



router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      res.status(200).json(data);
      console.log("data saved!!!");
    } catch (err) {
      res.status(500).json({ error: "internal server error" });
      console.log(err);
    }
  });


router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType;
      if (workType == "chef" || workType == "manager" || workType == "waiter") {
        const response = await Person.find({ work: workType });
        console.log("response fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Invalid work type" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const response = await Person.findByIdAndUpdate(id, data,{
        new: true,
        runValidators: true
      });
      console.log("data updated");
      res.status(200).json(response);
      if(!response){
        res.status(404).json({error:"data not found"})
    } }catch (err) {
      res.status(500).json({ error: "internal server error" });
      console.log(err);
    }
  });
  router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const response = await Person.findByIdAndDelete(id);
      console.log("data deleted");
      res.status(200).json({message:"person deleted"});
      if(!response){
        res.status(404).json({error:"data not found"})
    } }catch (err) {
      res.status(500).json({ error: "internal server error" });
      console.log(err);
    }
  });


  module.exports = router