const express = require("express");

const app = express();

const port = 5000; // OR 3000
app.use(express.json());

let toDo = [
  { id: 1, name: "Rawan", isCompleted: true },
  { id: 2, name: "Razan", isCompleted: true },
  { id: 3, name: "Remas", isCompleted: false },
  { id: 4, name: "Rana", isCompleted: false },
];

app.get("/disply", (req, res) => {
  res.status(200);
  res.json(toDo);
});

app.get("/disply_Last_Item", (req, res) => {
  res.status(200);
  res.json(toDo[3]);
});

// by params 
app.post("/add_Name", (req, res) => {
  toDo.push({ id: 5, name: "Reema", isCompleted: false });
  res.json(toDo);
});

app.post("/add_Name_by_body", (req, res) => {
  const { id, name, isCompleted } = req.body;
  toDo.push({ id, name, isCompleted });
  res.json(toDo);
});

app.get("/completed", (req, res) => {
  const comp = toDo.filter((e) => e.isCompleted === true);
  res.json(comp);
});

app.get("/is_Not_Completed", (req, res) => {
  const comp = toDo.filter((e) => e.isCompleted === false);
  res.json(comp);
});

app.delete("/remove/:id", (req, res) => {
  const { id } = req.body;
  toDo.splice(toDo.indexOf({ id }), 1);
//   res.status(200);
  res.json(id);
});

// update 
app.put("/update/:id/:newName" , (req, res) => {
    const update = toDo.map((elem) => {
        if (elem.id == req.params.id ){
            return{
                id : elem.id ,
                name : req.params.newName,
                isCompleted : elem.isCompleted,
            };
        }
        else return elem;
    });
    res.json(update);
});
    
app.listen(port, () => {
  console.log(`Server is running on port ${port} ...`);
});
