import React from 'react'
import PostDetail from '../../components/PostDetail'

import {getPosts , getPostDetails} from "../../services"

const PostDetails = () => {
    return (
        <div className='container' >
            <PostDetail  />
        </div>
    )
}

export default PostDetails

