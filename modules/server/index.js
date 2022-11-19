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
import { validateUser } from "../database/validateUser.js";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/validate-user', async (req,res) => {
    const vRes = await validateUser(req.body);
    res.status(vRes.valid ? 200 : 400).json(vRes);
});

// To do: integrasi dengan fungsi getPercentage yang ada di file modules\database\getPercentage.js
// Silahkan lihat endpoint /validate-user sebagai contoh
app.get('/vote-percentage', async (req,res) => {
    const server_user_data = {
        nis: req.body.nis,
        name: req.body.name,
        class: req.body.class,
        voted: req.body.voted
    }
    res.status(200).json([{
        data: server_user_data
    }])
})

// To do: integrasi dengan fungsi saveVote yang ada di file modules/database/saveVote.js
// Silahkan lihat endpoint /validate-user sebagai contoh
app.post('/vote', async (req, res) =>{
    const vote = {
        id: req.body.id,
        time: req.body.time,
        vote: req.body.vote
    }
    res.status(200).json([{
        data: vote
   }])
})

app.get('/', (req, res) => {
    res.send('Testing!');
});

app.listen(port, (req, res) => {
    console.log(`Your server is running in port ${port}`)
})