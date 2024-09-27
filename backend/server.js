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

// app.get('/comments', (req, res) => {
//     res.send("GET Request called comments")
// })


/*static comments table*/
const comments = [
    { id: 1, text: "first comment" },
    { id: 2, text: "second comment" },
    { id: 3, text: "third comment" },
  ];

// router.get('/comments', (req, res) => {
//     res.json(comments); // send static comments as JSON
// });


                            //////////////////////////schema for database////////////////////////////////

// const commentSchema = new mongoose.Schema({
//   id: {
//       type: Number,
//       required: true,
//       unique: true
//   },
//   text: {
//       type: String,
//   }
// });
// const Comment = mongoose.model('Comment', commentSchema);




app.get('/comments', (req, res) => {
    res.json(comments);
});



// POST comments
app.post('/comments', (req, res) => {
  const lastComment = comments[comments.length - 1]; // get the last comment
  const newCommentId = lastComment ? lastComment.id + 1 : 1; 

    const newComment = {
        id: newCommentId, // id 
        text: req.body.text // get the comment text from request body
    };
    comments.push(newComment); // add new comment to the array
    console.log("all comments are:", comments);
    res.status(201).json(newComment); // responce
});



// DELETE comments
app.delete('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id); // find comment id 
  const commentIndex = comments.findIndex(c => c.id === commentId); // find comment index 
  if (commentIndex < 0) { 
    return res.status(404).json({ message: "Comment not found" });
  }

  const deletedComment = comments.splice(commentIndex, 1); // remove comment from the array
  console.log("Deleted comment:", deletedComment);
  res.status(200).json(deletedComment); 
});


// PUT comments
app.put('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id); 
  const commentIndex = comments.findIndex(c => c.id === commentId); 

  if (commentIndex < 0) { 
    return res.status(404).json({ message: "Comment not found" });
  }

  comments[commentIndex].text = req.body.text; // update comment text
  console.log("Updated comment:", comments[commentIndex]);
  res.status(200).json(comments[commentIndex]); 
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

