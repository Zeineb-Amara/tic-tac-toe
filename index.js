const express= require('express') /* des variables de la biblio*/
const app= express()     /* des variables de la biblio express*/
const port = process.env.PORT || 3001           //port de connection serveur dans le reseau local 
app.use(express.static(__dirname +"/public"))
//create instance of http server
const server= require('http').createServer(app) /*creation lien http*/

app.get("/home", (req,res)=>{           
   res.sendFile(__dirname + "/public/home.html")   
 })

 app.get("/1v1", (req,res)=>{           
    res.sendFile(__dirname + "/public/public1/1v1.html")   
  })

  app.get("/computer", (req,res)=>{           
    res.sendFile(__dirname + "/public/public2/computer.html")   
  })
  

 server.listen(port,()=>{
    console.log("server running ")   
})