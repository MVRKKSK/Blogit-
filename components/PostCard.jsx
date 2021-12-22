import moment from "moment"
import Link from "next/link"

const PostCard = ({ post }) => {
    console.log(post)
    return (
        <div className="PostCard-main">
            <div className="PostCard-content">
                <img src={post.featuredImage.url}
                    alt={post.title}
                    className="Postcard-image-main" />
            </div>
            <h1 className="Post-card-content">
                <Link href={`/post${post.slug}`} >
                    {post.title}
                </Link>
            </h1>
        </div>
    )
}

export default PostCard