import moment from "moment"
import Link from "next/link"
import { FcCalendar } from "react-icons/fc";

const PostCard = ({ post }) => {
    return (
        <div className="PostCard-main shadow-lg">
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
            <div className="Icon-And-Author-Date ">
                <div className="Icon-Author d-flex justify-content-center align-items-center ">
                    <img src={post.author.photo.url}
                        alt=""
                        className="Icon-POstCard" />
                    <p className="Author-PostCard">{post.author.name}</p>
                </div>
                <div className="moment-date-icon d-flex justify-content-center align-items-center">
                    <div className="icon-POstcard-moment">
                        <FcCalendar size="2em" />
                    </div>
                    <div className="date-POstcard-moment">
                        {moment(post.CreatedAt).format('MMM DD , YYYY')}
                    </div>
                </div>
            </div>
            <div className="Heading-text-POstcard">
                <div className="in-line-text-heading-post-card">
                    {post.exercpt}
                </div>
                <div className="Read-More-Button">
                    <Link href={`/post/${post.slug}`}>
                        <span className="Read-more-text">Read More</span>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default PostCard