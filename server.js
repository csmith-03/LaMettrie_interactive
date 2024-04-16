const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(express.json()); // This line is essential to parse JSON request bodies



app.use(cors({
    origin: 'http://127.0.0.1:5500', // Specify the origin
    methods: ['GET', 'POST'], // Allowable methods
    allowedHeaders: ['Content-Type'], // Headers that can be used in the actual request
    credentials: true // Allow cookies to be sent
}));

// Hardcoded responses
const responses = {
    "hello": "Hello! I am Julien Offray de La Mettrie. How can I assist you today?",
    "what is your philosophy": "I advocate for materialism and believe that humans are complex machines.",
    "tell me about man a machine": "Man a Machine argues that humans and animals are complex machines, and there is no divine spiritual essence."
};

app.post('/getresponse', (req, res) => {
    const input = req.body.input.toLowerCase(); // Normalize input to lowercase for matching
    const response = responses[input] || "I'm sorry, I don't have an answer to that question. Can you try asking something else?";
    res.json({ message: response });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
