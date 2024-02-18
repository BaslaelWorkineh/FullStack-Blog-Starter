import React, {useState} from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('')
    const [commentText, setCommentText] = useState('')
    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`,{
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                "Content-Type": "application/json",
            },
            
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    };

  return (
    <form>
        <h3>Add a Comment</h3>
        <label>Name :</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        
        <label>Comment :</label>
        <textarea rows='4' cols='50' value={commentText} onChange={(e) => 
        setCommentText(e.target.value)}/>
        <button onClick={()=>addComments()}>Add Comment</button>
    </form>
  )
}

export default AddCommentForm