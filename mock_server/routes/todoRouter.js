import express from "express";

const router = express.Router();

let data = [];

router.get("/", (req, res) => {
  // res.send("Elacisan");

  setTimeout(() => {
    res.json(data);
  }, 2000);
});

router.post("/todos", (req, res) => {
  data = [...data,req.body];
  res.status(201).json(req.body);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // data = {
  //   ...data,
  //   texts: data.texts.filter((_, index) => index !== Number(id)),
  // };
  data=data.filter((item)=>item.id !== Number(id));

  setTimeout(() => {
    res.status(200).send(id);
  }, 2000);

  console.log(id, data);
});

export default router;
