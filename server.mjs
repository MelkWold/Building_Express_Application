// Import relevant packages
import express from "express";
const PORT = 3000;

// Set up express
const app = express();

// Set routes
app.get("/", (req, res) => {
    res.send("Welcome to my page!")
})

// Listen
app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})