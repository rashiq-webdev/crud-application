const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db=mysql.createConnection({
    user:'root',
    host:'localhost', 
    password:"password",
    database:'employee'
})

app.post('/create',(req,res)=>{
      const name =req.body.name;
      const age =req.body.age;
      const email =req.body.email;
      const contact =req.body.contact;
      
      db.query("INSERT INTO users (name,age,email,contact) VALUES (?,?,?,?)",
      [name,age,email,contact],
      (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("done");
        }
      
      }
      );
});

app.get('/users',(req,res)=>{
   db.query('SELECT * FROM users',(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
   })
});

app.put('/update',(req,res)=>{
    const id =req.body.id;
    const name =req.body.name;
    const age =req.body.age;
    const email =req.body.email;
    const contact =req.body.contact;

    db.query("UPDATE users SET name=? , age=? , email=?, contact=? WHERE id=?",
    [name,age,email,contact,id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    }
    )
    
});

app.delete('/delete/:id',(req,res)=>{
    const id =req.params.id;
    db.query("DELETE FROM users WHERE id = ?",id,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    }
    )
});

app.listen(3002,()=>{
    console.log('your Server is running on port 3002')
})
 
