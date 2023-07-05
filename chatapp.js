const express=require('express')
const chat=  express()
const fs=require('fs')
const bodyParser=require('body-parser')
chat.use(bodyParser.urlencoded({ extended: false }))
chat.get('/chat',(req,res,next)=>{   
    fs.readFile('chat.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat Exist'
        }
        res.send(`${data}
        <form  action="/chat" method="POST" onsubmit="document.getElementById('username').value= localStorage.getItem('username')">
          <input type="text" id="chat" name="chat" placeholder="chat" /> 
          <input type="hidden" id="username" name="username" placeholder="username" />    
          <button type="submit">Save</button>
        </form>
      `);
    })  
})

chat.post('/chat',(req,res,next)=>{
    console.log(req.body.chat)
    console.log(req.body.username)
    if(!req.body.chat){
    fs.writeFile('chat.txt','',{flag:'a'},(err)=>{
        if (err){
            console.log(err)
        }
        else{
            res.redirect('/chat')
        }
    }) 
}
else{
   fs.writeFile('chat.txt',`${req.body.username}:${req.body.chat}`,{flag:'a'},(err)=>{
        if (err){
            console.log(err)
        }
        else{
            res.redirect('/chat')
        }
    })  
}  
})
chat.get('/',(req,res,next)=>{
    res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/chat" method="POST">
      <input type="text" id="username" name="username" placeholder="username" />
      <button type="submit">Save</button>
    </form>
  `);
})



chat.listen(2500)

