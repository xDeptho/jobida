const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route for /submit-job
app.post('/submit-job', (req, res) => {
    console.log('Received submit-job data:', req.body);
    res.json({ status: 'success', message: 'Data received' });
});

// Route for /increment-hitcount
app.post('/increment-hitcount', (req, res) => {
    console.log('Hitcount incremented:', req.body);
    res.json({ status: 'success', message: 'Hitcount updated' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
