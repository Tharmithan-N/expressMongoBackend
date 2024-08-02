const express = require("express");

const router = express.Router();

const SubjectModel = require("../models/Subject");

router.post("/subject", (req, res) => {
  const subject = new SubjectModel({
    name: req.body.name,
    code: req.body.code,
  });
  subject
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/subject", (req, res) => {
  const subjects = SubjectModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/subject/:id", (req, res) => {
  const _id = req.params.id;
  const subject = SubjectModel.findById(_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/subject/:id", (req, res) => {
  const _id = req.params.id;
  const deleteUser = SubjectModel.findByIdAndDelete(_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.patch("/subject/:id", (req, res) => {
  const _id = req.params.id;
  const UpdateSubject = SubjectModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
