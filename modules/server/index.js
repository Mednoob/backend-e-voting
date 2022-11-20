import { getPercentage } from "../database/getPercentage.js";
import { saveVote } from "../database/saveVote.js";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());

// Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.path}`);
    next();
})

app.get('/vote-percentage', async (req,res) => {
    res.status(200).json(await getPercentage());
})

app.post('/vote', (req, res, next) => {
    try {
        const decoded = Buffer.from(req.headers.authorization.split(" ")[1], "base64").toString("utf-8");
        if (!(/^e-vote-logged-in-\d+$/).test(decoded)) throw new Error();

        next()
    } catch {
        res.status(401).json({
            valid: false,
            message: "Anda belum login. Silahkan minta admin untuk login."
        })
    }
}, async (req, res) => {
    const obj = await saveVote(req.body);
    res.status(obj.valid ? 200 : 400).json(obj);
})

app.post('/login', (req, res) => {
    // Low-level security, yes. Karena udah mepet deadline.
    try {
        const decoded = Buffer.from(req.body.password, 'base64').toString('ascii');
        const dExec = (/^e-vote-(\d+)$/).exec(decoded);
        if (!dExec) throw new Error();

        const [, num] = (/^komputer(\d+)$/).exec(req.body.username);
        if (num !== dExec[1]) throw new Error();

        res.status(200).json({
            valid: true,
            token: Buffer.from(`e-vote-logged-in-${num}`).toString('base64'),
            displayName: `Komputer ${num}`
        });
    } catch {
        res.status(401).json({
            valid: false,
            token: null,
            displayName: null
        });
    }
});

app.get('/', (req, res) => {
    res.send('Testing!');
});

app.listen(port, (req, res) => {
    console.log(`Your server is running in port ${port}`)
});
