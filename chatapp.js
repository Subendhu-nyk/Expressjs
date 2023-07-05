const express=require('express')
const chat=  express()
const fs=require('fs')
const bodyParser=require('body-parser')
chat.use(bodyParser.urlencoded({ extended: false }))
chat.get('/',(req,res,next)=>{   
    fs.readFile('chat.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat Exist'
        }
        res.send(`${data}
        <form  action="/" method="POST" onsubmit="document.getElementById('username').value= localStorage.getItem('username')">
          <input type="text" id="chat" name="chat" placeholder="chat" /> 
          <input type="hidden" id="username" name="username" placeholder="username" />    
          <button type="submit">Chat</button>
        </form>
      `);
    })  
})

chat.post('/',(req,res,next)=>{
    console.log(req.body.chat)
    console.log(req.body.username)
    if(!req.body.chat){
    fs.writeFile('chat.txt','',{flag:'a'},(err)=>{
        if (err){
            console.log(err)
        }
        else{
            res.redirect('/')
        }
    }) 
}
else{
   fs.writeFile('chat.txt',`${req.body.username}:${req.body.chat}`,{flag:'a'},(err)=>{
        if (err){
            console.log(err)
        }
        else{
            res.redirect('/')
        }
    })  
}  
})
chat.get('/login',(req,res,next)=>{
    res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">
      <input type="text" id="username" name="username" placeholder="username" />
      <button type="submit">Submit</button>
    </form>
  `);
})


chat.listen(2700)

