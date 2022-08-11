const express = require("express");
const { Sequelize, Todo } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { user_id } = req.session;
    const todos = await Todo.findAll({ order: [["updatedAt", "DESC"]], where: {user_id} });
    res.json(todos);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const todos = await Todo.create({
      ...req.body,
      status: false,
      user_id: req.session.user_id,
    });
    res.json(todos);
  } catch (error) {
    res.sendStatus(500);
  }
});


router.put("/status/:id", async (req, res) => {
  try {
    await Todo.update(
      { status: Sequelize.literal("NOT status") },
      { where: { id: req.params.id } }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.put("/title/update/:id", async (req, res) => {
  try {
    await Todo.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    const { user_id } = req.session;
    await Todo.destroy({ where: { user_id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
