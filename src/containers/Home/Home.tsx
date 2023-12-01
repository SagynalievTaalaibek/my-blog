import React, { useCallback, useEffect, useState } from 'react';
import axiosApiPost from '../../axiosApiPost';
import PostItem from '../../components/PostItem/PostItem';
import Preloader from '../../components/Preloader/Preloader';
import { PostList } from '../../types';

interface Props {
  addPost: (newPost: PostList) => void;
}

const Home: React.FC<Props> = ({ addPost }) => {
  const [posts, setPosts] = useState<PostList>();
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axiosApiPost.get<PostList>('posts.json');

      if (response.data) {
        setPosts(response.data);
      }
    } catch (e) {
      alert('Error' + e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    if (posts) {
      addPost(posts);
    }
  }, [posts, addPost]);

  return (
    <div>
      {posts &&
        Object.keys(posts).map((post) => (
          <PostItem
            title={posts[post].title}
            date={posts[post].date}
            id={post}
            key={post}
          />
        ))}
      {loading && <Preloader />}
    </div>
  );
};

export default Home;
