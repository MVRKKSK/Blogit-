import React from 'react'
import PostDetail from '../../components/PostDetail'
import PostWidget from '../../components/PostWidjet'

import { getPosts, getPostDetails } from "../../services"

const PostDetails = ({post}) => {
    return (
        <div className='container' >
            <div className='row'>

                <div className='col-lg-3'>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                </div>
                <div className='col-lg-9'>
                    <PostDetail post = {post}/>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;


export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}



