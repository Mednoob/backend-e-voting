/**
 * Penempatan server express
 * 
 * Tugas dari bagian server adalah untuk mengelola endpoint yang akan digunakan oleh front-end
 * dan menerima data dari front-end (seperti file excel, JSON, dsb).
 * 
 * Beberapa hal yang bisa dicari untuk penyelesaian:
 * - Cara membuat server sederhana dengan express
 * - Body parser untuk express
 * - Library untuk mengambil file hasil upload contoh: multer
 */

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); 


app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.post('/server-user-data', (req,res) => {
    const server_user_data = {
        nis: req.body.nim,
        name: req.body.name,
        class: req.body.class,
        voted: req.body.voted
    }
    res.status(200).json[{
        data: server_user_data
    }]
})
app.post('/server-user-data-submission', (req,res) => {
    const server_user_data_submission = {
        nis: req.body.nim,
        name: req.body.name,
        class: req.body.class,
    }
    res.status(200).json[{
        data: server_user_data_submission
    }]
})
app.post('/Vote', (req, res) =>{
    const vote = {
        id: req.body.id,
        time: req.body.time,
        vote: req.body.vote
    }
    res.status(200).json[{
         data: vote
    }]
})

app.get('/', (req, res) => {
    res.send('Testing!');
});
app.get('/server-user-data', (req, res) => {
    res.send('server-user-data')
})
app.get('/server-user-data-submission', (req, res) => {
    res.send('server-user-data-submission')
})
app.get('/vote', (req, res) => {
    res.send('Vote')
})

app.listen(port, (req, res) => {
    console.log(`Your server is running in port ${port}`)
})