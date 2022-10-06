const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();

// public directory
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:8100"
    
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form.urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// normal use. Doesnt delete the database data
db.sequelize.sync();

// In development, you may need to drop existeing tables and re-sync database
// comentado para que no borres los datos de las tablas
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la aplicación Escritores."});
});

require("./routes/writer.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

