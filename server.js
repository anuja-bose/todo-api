// Express  Common js module syntax
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8001;
const { initilizeDataFile } = require("./connect/connectDataFile");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Initilize Data File
initilizeDataFile();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to TODO APP API" });
});
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
