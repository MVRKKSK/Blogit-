import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="Post-widjet-main shadow-lg">
      <h3 className="Post-widjet-heading">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="Post-widjet-content">
          <div className="image-div-post-widjet">
            <img
              
              alt={post.title}
              unoptimized
              className="image-post-widjet"
              src={post.featuredImage.url}
            />
          </div>
          <div className="Date-slug-post-widjet">
            <p className="Date-post-widjet">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}><p className="Slug-post-widjet" >{post.title}</p></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
