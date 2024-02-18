import React from 'react'

const CommentsList = ({commnets}) => {
  return (
    <>
     <h3>Comments: </h3>
     {commnets.map((comment, index)=>(
        <div>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
     ))}
    </>
   
  )
}

export default CommentsList