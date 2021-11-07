// const { request, response } = require("express");
const express = require("express");

const app = express();
const port = 3000; //5000 

app.use(express.json())

const students = [
    { name :"Rawan " , age :23 , color :"yellow"}, 
    { name :"Rana " , age :20 , color :"black"},
    { name :"Maha " , age :25 , color :"white"},
    { name :"Razan " , age :15 , color :"pink"},
]; 
    
app.get("/students", (request,response) =>{
    response.status(200);
    response.json(students); 
})

app.get("/student", (request,response) =>{
  
    const { name } = request.query;
    const found = students.find((e) => {
        return e.name === name;
    }); 
    if (found) {
        response.status(200); 
        response.json(found);
    } 
    else{
        response.status(404);
        response.json("student not found !!");
    }
});
app.get("/student/:name" , (request,response) =>{
    const { name } = request.params;
    const found = students.find(( e) => {
        return e.name === name;
    }); 
})

app.post("/create",(request,response) =>{
    const {name, age, color} =request.body 

     students.push({name, age, color});
     response.status(201);
     response.json({name, age, color});
});

app.listen(port,() => { 

 console.log(`Server is running on port ${port}`);
}); 