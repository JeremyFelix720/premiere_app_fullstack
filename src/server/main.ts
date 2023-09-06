import express from "express";
import ViteExpress from "vite-express";
import fs from "fs-extra";
// npm i fs-extra  +  npm i --save-dev @types/fs-extra
import "dotenv/config"
// npm i dotenv --save


const app = express();
const port = 3030
//req.headers.host = "localhost:3030"

// Par défaut, la route "/" ouvre le fichier "index.html" dans le navigateur. 

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.get('/hello/:name', (req, res) => {
    let name = req.params.name
    res.send("Bonjour " + name)
    //console.log("Bonjour " + name)
})

app.get('/hellos/:name', (req, res) => {
  let data = fs.readJSONSync("hellos.json") // je récupère l'objet "hellos.json"
  let hellosData: string[] = data.hellos // je récupère le tableau "hellos" qui se trouve dans "hellos.json" 
  let name = req.params.name // je récupère le paramètre passé par l'utilisateur (lorsqu'il clique sur le bouton - voir le code côté client)
  hellosData.push(name) // je le rajoute dans le tableau "hellos"
  fs.writeJSONSync("hellos.json", {hellos: hellosData}) // ???

  res.send(hellosData.length.toString()) // Je renvois la donnée du côté serveur (ici) vers le côté client
})



ViteExpress.listen(app, port, () =>
  console.log("Server is listening on port "+ port + "...")
);