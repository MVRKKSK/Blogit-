import Head from 'next/head'
import { PostCard , PostWidjet , Categories } from '../components';
import "bootstrap/dist/css/bootstrap.min.css"
/* import "bootstrap/dist/js/bootstrap.bundle.min.js" */
import { getPosts } from '../services';


export default function Home({posts}) {
  return (
    <div className='container'>
      <Head>
        <title>Blogit-Developer's Community</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='row '>
        <div className='col-lg-3 d-flex flex-column align-items-center'>
          <Categories />
        </div>
        <div className='col-lg-6 d-flex flex-column '>
          {posts.map((post) => (
            <div>
              <PostCard post = {post.node} key = {post.title} />
            </div>
          ))}
        </div>
        <div className='col-lg-3 d-flex flex-column align-items-center'>
            <PostWidjet />
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}