// BUILD YOUR SERVER HERE
const express = require("express"); //import express from 'express' in commonjs
const { create } = require("./users/model.js");
const Users = require("./users/model");

const server = express();

server.use(express.json());

//Endpoints

server.get("/api/users/:id", (req, res) => {
  //where is ID param in url coming from?
  const id = req.params.id; //object that holds all variable objects in url
  Users.findById(id)
    .then((user) => {
      if (user) {
        res
          .status(404)
          .json({ message: "Dog not found with this id not found" });
      } else {
        res.json(user); //could put status 200, but that is default, so no necessary
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
