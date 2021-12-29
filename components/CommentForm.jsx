import React, { useState, useEffect, useRef } from 'react'

const CommentForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [storage, setStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storedataEl = useRef();;
    return (
        <div>
            <div className="commentform-main">
                <div className='commentform-heading'>
                    Add a comment here
                </div>
                <div className="text-comment-comment-form">
                    <textarea name='comment' ref={commentEl} placeholder='Enter your text here' className='text-area-commentform' ></textarea>
                </div>
                <div className="container ">
                    <div className="row name-email-commentform">
                        <div className="col-lg-6"><textarea name='name' ref={nameEl} placeholder='Name' className='name-area-commentform' ></textarea></div>
                        <div className="col-lg-6"><textarea name='email' ref={emailEl} placeholder='Email' className='email-area-commentform' ></textarea></div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CommentForm
