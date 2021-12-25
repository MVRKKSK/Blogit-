import moment from "moment"
import { useState, useEffect } from "react"

import { getRecentPosts } from "../services"

const PostWidjet = ({ categories, slug }) => {

    const [getRelatedposts, setRelatedgetposts] = useState([])
    useEffect(() => {
        if (slug) {
            getSimilarposts(categories, slug)
                .then((result) => (
                    setRelatedgetposts(result)
                ))
        }
        else {
            getRecentPosts()
                .then((result) => (
                    setRelatedgetposts(result)
                ))
        }
    }, [slug])
    console.log(10)
    return (
        <div className="PostWidget-main">
            <div className="PostWidget-content-main">
                <p className="heading-postWidget-main-content">
                    {slug ? " Related Posts" : "Recent Posts"}
                </p>
                {getRelatedposts.map((post) => (
                    <div key={post.title} className="image-content-date-postWidget d-flex flex-column justify-content-center align-items-center">
                        <img src={post.featuredImage.url} alt={post.title} className="postWidget-image" />
                        <p className="date-in-PostWidget">{moment(post.CreateAt).format('MMM DD , YYYY')}</p>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default PostWidjet
