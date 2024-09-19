import express from 'express';
import serverless from 'serverless-http';

const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('User Service Running');
});

// Export the app to be used in Lambda
module.exports.handler = serverless(app);