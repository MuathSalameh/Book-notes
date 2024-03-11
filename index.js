import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
const port=3000;
const app=express();
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "booknotes",
    password: "",
    port: 5432,
  });
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let books=[];
// get the main page (read info from your db and pass it to index.ejs file)
app.get("/", async(req,res)=>{
try{
     books = await db.query("SELECT * FROM books ORDER BY name");
        console.log(books.rows);
        res.render("index.ejs",{book:books.rows});
}
catch(err){
    console.log(err);
}
});

// get the 'add' page to add a new book
app.get("/add",async(req,res)=>{
    res.render("add.ejs",{book:""});
});
// post the info into the db to creat a new record and redirect to the main page
app.post("/add",async (req,res)=>{
    const name =req.body.name;
    const description=req.body.description;
    const note =req.body.note;
    const isbn =req.body.isbn;
    const date =req.body.date;
    try{
        await db.query("INSERT INTO books (name,description,note,isbn,date) VALUES ($1,$2,$3,$4,$5)", 
        [name,description,note,isbn,date]
        );
        res.redirect("/")
    }
    catch(err){
        console.log(err);
    }
});
// show a specific book info (using their  id) in the 'notes' page
app.post("/notes",async (req,res)=>{
    const id =req.body.id;
    console.log(id);
    try{
        books= await db.query("SELECT * FROM books WHERE id=$1", 
        [id]
        );
        res.render("notes.ejs",{book:books.rows});
    }
    catch(err){
         console.log(err);
    }
});
// show a specific book info (using their id) in the 'edit' page to edit it
app.post("/edit",async(req,res)=>{
    const id =req.body.id;
    console.log(id);
    try{
        books= await db.query("SELECT * FROM books WHERE id=$1", 
        [id]
        );
        res.render("add.ejs",{book:books.rows});
    }
    catch(err){
         console.log(err);
    }
});
// post all info of the book after editing and redirect to the main page 
app.post("/e",async(req,res)=>{
    const name =req.body.name;
    const description =req.body.description;
    const note =req.body.note;
    const isbn = req.body.isbn;
    const date = req.body.date.trim();
    const id = req.body.id;
    console.log(name + description + note + isbn + date );
    try{
        await db.query("UPDATE books SET name=$1 , description=$2 , note=$3 , isbn=$4 , date= $5 WHERE id=$6", 
        [name,description,note,isbn,date,id]
        );
        res.redirect("/")
    }
    catch(err){
        console.log(err);
    }
});
// Delete the book you want
app.post("/delete",async (req,res)=>{
    const id =req.body.id;
    console.log(id);
    try{
        await db.query("DELETE FROM books WHERE id=$1",
        [id]
        );
        res.render("/");
    }
    catch(err){
       console.log(err);
    }
});
//sort the books (newest or oldest first)
app.post("/sort",async (req,res)=>{
    const order=req.body.sort;
    try{
        if(order=="DESC"){ 
        books= await db.query("SELECT * FROM books ORDER BY date DESC");
        res.render("index.ejs" ,{book:books.rows});
    }
        else{
            books= await db.query("SELECT * FROM books ORDER BY date ASC");
            res.render("index.ejs" ,{book:books.rows});
        }
    }
    catch(err){
        console.log(err);
    }
});
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
});