import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services';

const CommentForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [storage, setStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storedataEl = useRef();

    useEffect(() => {
       
            nameEl.current.value = window.localStorage.getItem("name");
            emailEl.current.value = window.localStorage.getItem("email");

    }, [])

    const handleSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current
        const { checked: storedata } = storedataEl.current

        if (!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, slug, comment };

        if (storedata) {
            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
        }
        else {
            localStorage.removeItem("name", name)
            localStorage.removeItem("email", email)
        }

        submitComment(commentObj).then((res) => {
            setShowSuccessMessage(true);

            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })
    }

    
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
                        <div className="col-lg-6"><input name='name' ref={nameEl} placeholder='Name' className='name-area-commentform' ></input></div>
                        <div className="col-lg-6"><input name='email' ref={emailEl} placeholder='Email' className='email-area-commentform' ></input></div>
                    </div>
                    <div className="label-input-comment-form">
                        <input className='checkbox-commentform' ref={storedataEl} type="checkbox" name='storedata' id="storedata" />
                        <label className='label-comment-form' htmlFor="storedata">Save my email and name for the next time I comment</label>
                    </div>
                    <div className="button-comment-form">
                        <button type="button" onClick={handleSubmission} className='Button-main-comment-form'>Add Comment</button>
                    </div>
                    {showSuccessMessage && <div className='review-submission-commentform'>Your comment is submitted for review</div>}
                </div>


            </div>

        </div>
    )
}

export default CommentForm
