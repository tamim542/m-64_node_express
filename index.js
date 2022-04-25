const express=require('express');
var cors = require('cors')
const app=express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT|| 5000;

app.get('/',(req,res)=>{
    res.send('hi i awm there');
})

const user=[
    {id:1, name:"sabana", email:"anbcd1@gmail.com", phone:012331},
    {id:2, name:"qwe", email:"anbcd2@gmail.com", phone:012332},
    {id:3, name:"wer", email:"anbcd3@gmail.com", phone:012333},
    {id:4, name:"wer3", email:"anbcd4@gmail.com", phone:012334},
    {id:5, name:"wer2", email:"anbcd5@gmail.com", phone:012335},
    {id:6, name:"sax2", email:"anbcd6@gmail.com", phone:012336},
    {id:7, name:"cds3", email:"anbcd7@gmail.com", phone:012337},
    {id:8, name:"s23na", email:"anbcd8@gmail.com", phone:012337}
]

app.get('/user',(req,res)=>{
    res.send(abc);
})
app.get('/fruit',(req,res)=>{
    res.send(['mango','apple','banana','orange']);
})

app.post('/user',(req,res)=>{
    console.log('request',req.body);
    res.send('abc');
})

app.listen(port, () => {
    console.log(`Example app listening  port ${port}`)
  })