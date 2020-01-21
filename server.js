// https://www.youtube.com/watch?v=ghTrp1x_1As
const express = require ("express"); // importa a dependência express
const app = express(); // instancia a variável
const data = require("./data.json"); // pega os dados de data.json

app.use(express.json()); // informando que o express vai usar notação JSON

//GET ALL(Insomnia)
app.get("/clients", function(request, response){ 
  response.json(data); 
  //responde o GET (http://localhost:3000/clients) do Insomnia
  //com a variável data que tem os dados de clientes
});

//GET SINGLE(Insomnia)
app.get("/clients/:id", function(req, res){ //request, response
  const { id } = req.params // solicita a id do cliente
  //não entendi muito. 27min
  const client = data.find(cli => cli.id == id) //(retorna o id desejado)
  

  // se o cliente não existir, retorna erro 204(No Content)
  if (!client) return res.status(204).json();

  //responde o GET (http://localhost:3000/clients/2) do Insomnia
  //com a variável data que tem os dados de clientes
  res.json(client);
});
//SALVAR
app.post("/clients", function(req, res){
  const { name, email } = req.body; //request name e email do body json POST do 
  //Insomnia:
  // {
  //   "name": "Luis",
  //   "email": "luisscarlostec@gmail.com"
  // }

  // salvar

  res.json({ name, email }); //response com name e email

});
//UPDATE
app.put("/clients/:id", function(req, res){
  const { id } = req.params // solicita a id do clients
  const client = data.find(cli => cli.id == id) // retorna o id desejado

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;
w
  res.json(client);

});
//DELETE
app.delete("/clients/:id", function(req, res){
  const { id } = req.params;
  //pega os ids que forem diferentes do que foi passado no parametro
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});


//inicia o app(server) na porta 3000
app.listen (3000, function() {
  console.log("Server is running");
});