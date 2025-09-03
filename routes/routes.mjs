import express from "express";

const router = express.Router();

router 
    .route("/")
    .get((req, res) => {
        res.send("Welcome to the homepage");
    })

    .post((req, res) => {
        res.send("You gotta post something here");
    })
router
    .route("/hobbies")
        .get((req, res) => {
            res.send("Welcome to the hobbies page");
        })

router
.route("/countriesVisited")
    .get((req, res) => {
        res.send("Welcome to the countries that I visied page");
    })


    export default router;