const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

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

    if (await DB.getUser(req.body.username)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await DB.createUser(req.body.username, req.body.password);

        // Set the cookie
        setAuthCookie(res, user.token);

        res.send({ id: user._id });
    }
});

// Auth - Login
apiRouter.post('/auth/login', async (req, res) => {
    console.log('POST request received at /auth/login');

    const user = await DB.getUser(req.body.username);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
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

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}