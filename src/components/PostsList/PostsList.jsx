import React, { useContext, useEffect } from 'react';
import Post from '../Post/Post';
import Pagination from '../Pagination/Pagination';
import { postsContext } from '../../postContext';
import './PostsList.css';

const PostsList = () => {
  const { getPosts, posts } = useContext(postsContext);
  
  useEffect(() => {
    getPosts();
  }, []);

  // console.log(posts);

  return (
    <div>
      <div className="posts-list">
        {posts?.map(item => (
          <Post key={item.id} card={item} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default PostsList