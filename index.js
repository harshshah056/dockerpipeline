// Import the Express module
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port number
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
