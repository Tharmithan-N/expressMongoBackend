const express = require("express");

const router = express.Router();

const UserModel = require("../models/User");

const Joi = require("@hapi/joi");

//get, post, put, delete

router.post("/add", (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/all", (req, res) => {
  const users = UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/user/:id", (req, res) => {
  const user = UserModel.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  const deleteUser = UserModel.findByIdAndDelete({ _id: id })
    .then((deleteUser) => {
      res.send(deleteUser);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.patch("/user/:id", (req, res) => { 
    const _id = req.params.id;

    const update = UserModel.findByIdAndUpdate(_id, req.body, {new:true})
    .then((update) => {
        res.send(update);
    })
    .catch((err) => {
        res.send(err);
    })
})

module.exports = router;
