import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from "html-react-parser"
import { getComments } from '../services'


const Comments = ({ slug }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(slug).then((result) => {
            setComments(result)
        })
    }, [])

    return (
        <div className="comment-main">
            <div className="comment-heading">
                Comments
            </div>
            <div className="Comment-whole">
                {comments.map((comment, index) => (
                    <div key={index} className="whole-comment">
                        <div className="comment-author">
                            <p className='comment-author-in'>
                                {comment.name}
                            </p>
                            <p className='moment-comment-main'>
                            {moment(comment.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <p className='comment-main-text'>
                                {comment.comment}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments
