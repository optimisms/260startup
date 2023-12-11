let history = [];

const express = require('express');
const app = express();

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

// GetHistory
apiRouter.get('/history', (req, res) => {
    res.send(historyData);
});

// SubmitNewForm
apiRouter.post('/form', (req, res) => {
    console.log('POST request received at /api/form');
    console.log(req.body);

    // history = updateHistory(req.body, history);
    // TODO: Push to DB
    
    historyData.push(req.body);
    res.send(historyData);
});

// updateHistory adds a new form to the history and returns the updated history.
let historyData = [
        { date: '2023-05-29', vaccines: ['Rabies'], petName: 'Winston' },
        { date: '2022-12-18', vaccines: ['Distemper'], petName: 'Max, Shazam' },
        { date: '2022-09-03', vaccines: ['Distemper'], petName: 'Shazam' }
    
];
function updateHistory(newForm) {
    historyData.push(newForm);

    return historyData;
}
