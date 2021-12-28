import React from 'react'
import moment from 'moment'
import { FcCalendar } from 'react-icons/fc'

const PostDetail = ({ post }) => {
    console.log(post)
    return (
        <div className="details-main">
            <div className="details-content">

                <img src={post.featuredImage.url}
                    className='image-post-details'
                    alt={post.title}

                />

                <div className='post-detail-author'>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="">
                            <img src={post.author.photo.url} alt={post.title} className='post-detail-image-author' />
                        </div>
                        <div className="post-detail-author-name">
                            {post.author.name}
                        </div>
                    </div>
                    <div className="post-details-cal d-flex justify-content-center align-items-center ">
                        <div className="post-detail-icon">
                            <FcCalendar size="2em" />
                        </div>
                        <div className="post-detail-date">
                            {moment(post.CreatedAt).format('MMM DD , YYYY')}
                        </div>
                    </div>
                </div>
                <div className="post-details-title-main">
                    {post.title}
                </div>
            </div>

        </div>
    )
}

export default PostDetail
