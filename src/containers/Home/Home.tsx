import { useState } from 'react';
import { PostHome } from '../../types';
import PostItem from '../../components/PostItem/PostItem';

const Home = () => {
  const [posts] = useState<PostHome[]>([
    {id: '1', title: 'Post title', date: '22.03.2023 22:00'}
  ]);

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Home;