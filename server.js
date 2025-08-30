// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/prescribe', (req, res) => {
    const { symptoms, age, gender, medicalHistory } = req.body;

    if (!symptoms || !age || !gender) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const prescription = {
        medication: 'Paracetamol 500mg',
        dosage: '1 tablet every 6 hours',
        duration: '5 days',
        instructions: 'Take after meals. Stay hydrated and rest.',
    };

    res.json(prescription);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
