import express from "express";

const router = express.Router();

let data = {
  fullname: {
    name: "Raisa",
    surname: "Yusifli",
  },
  phone: "+994555063466",
  gender: "female",
  priorarity: "medium",
  texts: ["I am junior Frontend developer"],
};

router.get("/", (req, res) => {
  // res.send("Elacisan");
  res.json(data);
});

router.post("/", (req, res) => {
  data = req.body;
  res.status(201).json(data);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  data = {
    ...data,
    texts: data.texts.filter((_, index) => index !== Number(id)),
  };

  res.status(200).send(null);

  console.log(id, data);
});

export default router;