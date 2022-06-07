import express from "express";


const app = express();

app.use((req, res, next) => {
  //  console.log(req.url);
    //res.send("yay")  mianqamic stexa mtnum mnacace chkan
    next();
});
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
   req.redirect("public/index.html");

    });
app.get("/hello", (req, res) => {
    res.send("yay");
});
let todos = [
    { label: "leaarn json", completed: false },
    {label:"leaarn json" , completed: false},
    {label:"leaarn json" , completed: false}

]
app.get("/todos ", (req, res) => {
    res.send(
        
        todos)
})

app.get("/bye", (req, res) => {
    res.send({
        name: "Joe"
    })
});
app.post("/hi", (req, res) => {
    console.log(req.body.name);
    res.send("Amen inch lav e");
});
app.listen(process.env.MY_APP_PORT);