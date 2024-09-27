// (Mariia) created post page and connected to backend
// (Zach) made comment editable and able to be deleted
//-------------------------------------------------------------------------------------------------------------//
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import kea from '../images/kea.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Card from 'react-bootstrap/Card';
import './PostDescriptionPageStyle.css';
import profileIcon from '../images/userPhoto.png';
import { MdModeEditOutline } from "react-icons/md";
import AddComment from '../components/AddComment';
import {FaTrash} from "react-icons/fa";

import { getComments, addComments, deleteComments, updateComments } from '../APIClient/comments';

function PostDescriptionPage() {
    const [input, setInput] = useState(""); 
    const [comments, setComments] = useState([]); // to store comments
    const [editIndex, setEditIndex] = useState(null); // index of comment being edited
    const [editInput, setEditInput] = useState(''); // store input for editing

    // take comments from server
    useEffect(() => {
        getComments() 
            .then(response => {

                setComments(response.data); 
            })
            .catch(error => {
                console.error("Error fetching comments:", error);
            });
    }, []);

    const addComment = () => {
        if (input.trim() !== "") { // ensure input is not empty
            const newComment = { text: input }; 
            addComments(newComment) // take comments to server
                .then(response => {
                    setComments([...comments, response.data]); 
                    setInput(""); 
                })
                .catch(error => {
                    console.error("Error adding comment:", error); 
                });
        }
    };

    const startEditComment = (index) => {
        setEditIndex(index); // set the index of the comment being edited
        setEditInput(comments[index].text); // load the comment into the edit input
    };

    const saveEditComment = (id, index) => {
        const updatedComment = { text: editInput }; 
        updateComments(id, updatedComment) // send edeted comment to server
            .then(response => {
                const updatedComments = [...comments]; 
                updatedComments[index] = response.data; 
                setComments(updatedComments); 
                setEditIndex(null); 
                setEditInput(''); 
            })
            .catch(error => {
                console.error("Error updating comment:", error); 
            });
    };

    const deleteComment = (id, index) => {
        deleteComments(id) 
            .then(() => {
                const updatedComments = comments.filter((_, i) => i !== index); //remove deleted comment
                setComments(updatedComments); 
            })
            .catch(error => {
                console.error("Error deleting comment:", error); 
            });
    };

    return (
        <div>
            <Navbar />
            <div className='post_content'>
                <Card className='card-position'>
                    <Card.Img variant="top" src={kea} alt="user avatar" />
                    <Card.Body>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='card-info'>
                                <Card.Title className='card-transparent-bg card-title-overlay'>Kea</Card.Title>
                                <Card.Text>Aoraki/Mount Cook National Park, Aoraki 7999</Card.Text>
                            </div>
                            <div className='card_icons-big d-flex justify-content-end'>
                                <img src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                                <img src={shareIcon} alt="share" className='share icon'/>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <div className='post_content_user-details d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <img src={profileIcon} alt="user avatar" className='img-fluid rounded-circle'/>
                        <h4>Olivia</h4>
                    </div>
                    <MdModeEditOutline className='icon-large'/>
                </div>
                <div>
                    <p>Found this guy while I was tramping, what a cool photo!</p>
                    <hr />
                    <div id='commentsBlock'>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className='post_content_user-details d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img src={profileIcon} alt="user avatar" className='img-fluid rounded-circle' />
                                        {editIndex === index ? (
                                            <>
                                                <input
                                                    className="edit-input"
                                                    type="text"
                                                    value={editInput}
                                                    onChange={(e) => setEditInput(e.target.value)}
                                                />
                                                <button className="save-button" onClick={() => saveEditComment(comment.id, index)}>Save</button>
                                            </>
                                        ) : (
                                            <p>{comment.text}</p> // display comment
                                        )}
                                    </div>
                                    {editIndex !== index && ( // show edit and delete buttons when not editing
                                        <>
                                            <MdModeEditOutline className='edit-comment' onClick={() => startEditComment(index)} />
                                            <FaTrash className="delete-comment" onClick={() => deleteComment(comment.id, index)}/>
                                        </>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>No comments yet</p> // initial message
                        )}
                    </div>
                </div>
            </div>
            <AddComment input={input} setInput={setInput} addComment={addComment} />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default PostDescriptionPage;