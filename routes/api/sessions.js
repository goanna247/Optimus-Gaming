const express = require("express");
const router = require('express').Router();

const Session = require("../../models/Session");

router.post("/session", (req, res) => {
  const newSession = new Session({
    date: req.body.date,
    length: req.body.length
  })
})