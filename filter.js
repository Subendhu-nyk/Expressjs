const express=require('express')
const server=express()
const bodyParser=require('body-parser')
const adminRoutes=require('./router/admin')
const shopRoutes=require('./router/shop')

server.use(bodyParser.urlencoded({extended:false}))

server.use('/admin',adminRoutes);
server.use(shopRoutes);
server.listen(3500)