const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require("hbs");

const registration = require("./models/registration");

require("./database/connection");

const static_path = path.join(__dirname, "../public" );
const templates_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) =>{
    res.render("index", {})
});

app.get("/register", (req, res) => {
    res.render("register");
})

//Create new user
app.post("/register", async (req, res) => {
    try {

        const userRegistration = new registration({
            username: req.body.username,
            nama: req.body.nama,
            email: req.body.email,
            password: req.body.password,
            tgl_lahir: req.body.tgl_lahir,
            harapan_user: req.body.harapan_user
        })

        const registered = await userRegistration.save();
        res.status(201).render(index);

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () =>{
    console.log(`Server Connecting to Port ${port}`);
})