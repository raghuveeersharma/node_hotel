const express = require("express");
const routerM = express.Router();

const Menu = require("./../models/menu");


routerM.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new Menu(data);
      const response = await newMenu.save();
      res.status(200).json(response);
      console.log("data saved!!!");
    } catch (err) {
      res.status(500).json({ error: "internal server error" });
      console.log(err);
    }
  });


routerM.get("/", async (req, res) => {
    try {
      const data = await Menu.find();
      res.status(200).json(data);
      console.log("data saved!!!");
    } catch (err) {
      res.status(500).json({ error: "internal server error" });
      console.log(err);
    }
  });

module.exports = routerM