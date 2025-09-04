// Import relevant packages
import express from "express";
import routes from "./routes/routes.mjs";
import { loggerFunc } from "./middleware/logger.mjs";
const PORT = 3000;

// Set up express
const app = express();

// Middleware
app.use(express.json());
app.use(loggerFunc)

// user routes
// app.use("/", routes)

// Using static styles
app.use(express.static("./styles"));

// ============================== Using EJS ===================================

// St up View Engine using ejs
    
    // step 1: set EJS at the view engine
    app.set("view engine", "ejs");

    // step 2: set the views folder as ./views
    app.set("views", "./views");

    // step 3: Render contents from the server to the home page
    app.get("/", (req, res) => {
        console.log("It's working")
        res.render ("home", {
            title: "Welcome to the Homepage",
            text1: "This webpage is kindly dedicated to you; the user! Please interact with our web platform in a manner that brings you joy and fullfillment. May peace be unto you!",
            text2: "And now, the links: "
        })
    });

    app.get("/hobbies", (req, res) => {
        res.render("hobbies");
    }); 

    app.get("/countriesVisited", (req, res) => {
        res.render("countriesVisited");
    })


// Middleware







// Listen
app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})