const express=require('express')

const routes=express.Router()

routes.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title" /><input type="number" name="size" /><button type="submit">Save</button></form>')
  
})
routes.post('/product',(req,res,next)=>{
    console.log(JSON.stringify(req.body))
    res.redirect('/')
})

module.exports=routes;