const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit-job', (req, res) => {
    console.log('Received submit-job data:', req.body);
    res.json({ status: 'success', message: 'Data received' });
});

app.post('/increment-hitcount', (req, res) => {
    console.log('Hitcount incremented:', req.body);
    res.json({ status: 'success', message: 'Hitcount updated' });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
