const express = require('express'),
    http = require('http'),
    config = require('./config')
    bodyParser = require('body-parser')

const {Client} = require('pg');

class Severino{

    constructor(){

        this.app = express();
        this.server = http.createServer(this.app);
        this.port = 3000;

        this.client = new Client(config.connection)

        this.client.connect();

    
        this.app

        .use(bodyParser.urlencoded({ extended: false }))
        .use(bodyParser.json())
        
        .get('/compras', (_, res) => {

            console.log("[ SEV ] Enviando lista de compras");

            this.client.query("select * from compras", (_, ans) => {

                res.send(ans.rows);

            })
            

        })

        .post('/compras', (req, res) => {

            let valor = req.body.valor
            let d = new Date()
        
            console.log("[ SEV ] Adicionando item "+valor);

            this.client.query(`insert into compras(valor,data) values ('${valor}', '${d.getDate()}/${d.getMonth()+1}')`, (_, ans) => {

                res.send("ok");

            })

        })

        .delete('/compras', (req, res) => {

            let valor = req.body.valor
        
            console.log("[ SEV ] Removendo item "+valor);

            this.client.query(`delete from compras where compras.valor= '${valor}';`, (_, ans) => {

                res.send("ok");

            })

        })

        this.server.listen(this.port, _ => console.log("Dale Severino"))


    }

}

new Severino();