import express from 'express';
import  router from "./routes";
import './database';
const app = express()



// Configura a porta pela variavel de ambiente ou usa a 3000 como padrão
const port = process.env.port || 3000

//Configura o arquivo de rotas
app.use(router)
app.listen(port, () =>{
  console.log('Server starded  :)')
})
