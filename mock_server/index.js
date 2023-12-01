import express from "express";
import cors from "cors";
import todoRouter from './routes/todoRouter.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// let data = {
//   fullname: {
//     name: "Raisa",
//     surname: "Yusifli",
//   },
//   phone: "+994555063466",
//   gender: "female",
//   priorarity: "medium",
//   texts: ["I am junior Frontend developer"],
// };

// app.get("/", (req, res) => {
//   // res.send("Elacisan");
//   res.json(data);
// });

// app.post('/',(req,res)=>{
//     data=(req.body);
//     res.status(201).json(data);
// })

// app.delete("/:id",(req,res)=>{
//     const {id}=req.params;

//     data={...data,texts:data.texts.filter((_,index)=>index !== Number(id))};

//     res.status(200).send(null);

//     console.log(id,data);
// })

// import { sayHello } from "./test.js";
// console.log("----------");
// sayHello();
