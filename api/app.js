//referencias  o librerias
const express = require('express');
const session = require('express-session');
//creacion de aplicacion 
const app = express()
//parte de loacion de la la app
const port = 9005;
//middlewares
app.use(express.json())
//obtener metodo 

app.get('/', (req, res) => {
  const object ={
      name: "rbgthiana",
      age: "23"
  }
    res.send(object)
})
app.post('/', (req, res) => {
    const data=req.body;
    res.send(data)
})
app.put('/', (req, res) => {
    const data=req.body;
    res.send(data)
})
app.delete('/', (req, res) => {
    const data=req.body;
    res.send(data)
})
//servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(session({
    secret:'478925',
    resave: true,
    saveUninitialized: true
}))
app.get('/contador', (req, res) => {
    req.session.visita = req.session.visita ? ++req.session.visita: 1;  
    res.send("the user has entered: " + req.session.visita + "times")
})