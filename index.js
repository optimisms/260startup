const express = require('express');
const app = express();
const DB = require('./database.js');

// Set up listening port
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Serve index.html as default page
// app.use((_req, res) => {
//     res.sendFile('html/index.html', { root: 'public' });
// });

// JSON body parsing using built-in middleware
app.use(express.json());

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Auth - Register
apiRouter.post('/auth/register', async (req, res) => {
    console.log('POST request received at /auth/register');
    res.send({ id: 'user@id.com' });
});

// Auth - Login
apiRouter.post('/auth/login', async (req, res) => {
    console.log('POST request received at /auth/login');
    res.send({ id: 'user@id.com' });
});

// GetHistory
apiRouter.get('/history', async(req, res) => {
    console.log('GET request received at /api/history');

    const history = await DB.getHistory();
    res.send(history);
});

// SubmitNewForm
apiRouter.post('/form', async(req, res) => {
    console.log('POST request received at /api/form');
    console.log(req.body);

    DB.submitNewForm(req.body);
    const history = await DB.getHistory();

    res.send(history);
});