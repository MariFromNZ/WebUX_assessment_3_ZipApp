const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

//Conection uri  (MongoDB Atlas)
var uri = "mongodb+srv://mariiafotina:D7mhQndOVXJsnfoo@cluster0.c4avl.mongodb.net/DataBase1?retryWrites=true&w=majority&appName=Cluster0";

//Connect to MongoDB
mongoose.connect(uri)
.then(() => {
  console.log("Connected to MongoDB Atlas!");
})
.catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
});


app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

app.get('/test', (req, res) => {
    res.send("GET Request Called")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

