import { useCallback, useEffect, useState } from 'react';
import { PostList } from '../../types';
import PostItem from '../../components/PostItem/PostItem';
import axiosApiPost from '../../axiosApiPost';
import Preloader from '../../components/Preloader/Preloader';

const Home = () => {
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
