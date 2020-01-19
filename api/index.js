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

        .get('/projetos', (_, res) => {

            console.log("[ SEV ] Enviando lista de projetos");

            this.client.query("select * from projetos", (_, ans) => {

                res.send(ans.rows);

            })
            

        })

        .post('/projetos', (req, res) => {

            let projeto = req.body
        
            console.log("[ SEV ] Adicionando projeto "+projeto.nome);

            this.client.query(`insert into projetos(nome,enviroment_script, run_script, path, repository) values 
                ('${projeto.nome}', '${projeto.enviroment_script}','${projeto.run_script}','${projeto.path}'
                 '${projeto.repository}')`, (_, ans) => {

                res.send("ok");

            })

        })

        .delete('/projetos', (req, res) => {

            let projeto = req.body.projeto
        
            console.log("[ SEV ] Removendo projeto de id "+projeto);

            this.client.query(`delete from projetos where projetos.id= '${projeto}';`, (_, ans) => {

                this.client.query(`delete from tarefas_projeto where tarefas_projeto.projeto= '${projeto}';`, (_, ans) => {

                    this.client.query(`delete from notes_projeto where notes_projeto.projeto= '${projeto}';`, (_, ans) => {

                        res.send("ok");
        
                    })
    
                })

            })

        })

        this.server.listen(this.port, _ => console.log("Dale Severino"))


    }

}

new Severino();