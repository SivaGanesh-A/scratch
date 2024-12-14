const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Configuration
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB Atlas URI if using cloud
const client = new MongoClient(uri);
const dbName = 'next_step_db';

app.post('/register', async (req, res) => {
    const { fullName, email, username, password } = req.body;

    if (!fullName || !email || !username || !password) {
        return res.status(400).send({ message: 'All fields are required.' });
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const users = db.collection('users');

        // Check if email or username already exists
        const existingUser = await users.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).send({ message: 'User already exists.' });
        }

        // Insert new user
        const result = await users.insertOne({ fullName, email, username, password });
        res.status(201).send({ message: 'User registered successfully', userId: result.insertedId });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});