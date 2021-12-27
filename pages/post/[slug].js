import React from 'react'
import { Categories } from '../../components'
import PostDetail from '../../components/PostDetail'
import PostWidget from '../../components/PostWidjet'

import {getPosts , getPostDetails} from "../../services"

const PostDetails = () => {
    return (
        <div className='container' >
            <div className='row'>
                
                <div className='col-lg-3'>
                <PostWidget  />
                </div>
                <div className='col-lg-6'>
                <PostDetail  />
                </div>
            </div>
            <div className='row'>
            <div className='col-lg-3'>
                <Categories  />
                </div>
            </div>
            
            
        </div>
    )
}

export default PostDetails;


export async function getStaticProps({params}) {
    const posts = (await getPosts()) || [];
    return {
      props: { posts },
    };
  }




