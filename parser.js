const express=require('express')
const server=express()
const bodyParser=require('body-parser')
server.use(bodyParser.urlencoded({extended:false}))
server.use('/add-product',(req,res,next)=>{
    console.log("get requested")
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><input type="number" name="size" /><button type="submit">Save</button></form>')
  
})
server.post('/product',(req,res,next)=>{
    console.log(JSON.stringify(req.body));
    res.redirect('/')
})
server.use('/',(req,res,next)=>{
    res.send('<h1> Hello from Express </h1>')
})

server.listen(3200)