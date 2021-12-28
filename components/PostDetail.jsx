import React from 'react'
import moment from 'moment'
import { FcCalendar } from 'react-icons/fc'

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };
    console.log(post)
    return (
        <div className="details-main shadow-lg">
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
                    <span className='post-detail-title'>
                        {post.title}
                    </span>

                </div>
                <div className="content-post-details">
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>

        </div>
    )
}

export default PostDetail
