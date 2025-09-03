// Import relevant packages
import express from "express";
import routes from "./routes/routes.mjs";
const PORT = 3000;

// Set up express
const app = express();

// Middleware
app.use(express.json());


// Using static styles
app.use(express.static("./styles"));


// user routes
app.use("/", routes)


// Building Template Engine using ejs
    // step 1: set EJS at the view engine
    app.set("view engine", "ejs");

    // step 2: set the views folder as ./views
    app.set("views", "./views");

    // step 3






// Listen
app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})