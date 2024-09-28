// (Mariia) worked with backend and database
//-------------------------------------------------------------------------------------------------------------//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());//to parse json

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


app.get('/', (req, res) => {//check backend
    res.send('Hello from backend!Test');
});


                            //////////////////////////  schema for database   ///////////////////////////////

const commentSchema = new mongoose.Schema({
  text: {
      type: String,
  }
});
const Comment = mongoose.model('Comment', commentSchema);



                            //////////////////////////   CRUD for comments   ////////////////////////////////

// GET all comments
app.get('/comments', (req, res) => {
  Comment.find() // find all comments in MongoDB
    .then(comments => {
      res.json(comments); // send comments as JSON 
    })
    .catch(error => {
      res.status(500).json({ message: 'Error fetching comments', error });
    });
});

// GET  comment by id
app.get('/comments/:id', (req, res) => {
  Comment.findById(req.params.id) // find comment by id in MongoDB
      .then(comment => {
          if (!comment) {
              return res.status(404).json({ message: "Comment not found" });
          }
          res.status(200).json(comment);// send comments as JSON 
      })
      .catch(error => {
          console.error("Error fetching comment:", error);
          res.status(500).json({ message: 'Error fetching comment', error });
      });
});

// POST new comment
app.post('/comments', (req, res) => {
  const newComment = new Comment({
    text: req.body.text // take text from comment 
  });

  newComment.save() // save new comment in MongoDB
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error adding comment', error });
    });
});

// DELETE comment
app.delete('/comments/:id', (req, res) => {
  Comment.findByIdAndDelete(req.params.id) // find comment in MongoDB and delete
    .then(deletedComment => {
      if (!deletedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.status(200).json(deletedComment);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error deleting comment', error });
    });
});

// PUT comment
app.put('/comments/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true }) // find comment by id and update 
    .then(updatedComment => {
      if (!updatedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.status(200).json(updatedComment); 
    })
    .catch(error => {
      res.status(500).json({ message: 'Error updating comment', error });
    });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

