import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axiosApiPost from '../../axiosApiPost';
import Preloader from '../../components/Preloader/Preloader';
import { PostList } from '../../types';

interface Props {
  posts: PostList | undefined;
}

const Post: React.FC<Props> = ({ posts }) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const deletePost = async () => {
    setLoading(true);
    try {
      await axiosApiPost.delete('posts/' + params.id + '.json');
    } catch (e) {
      alert('Delete id error' + e);
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

  const postCard = () => {
    if (posts) {
      const postKeys = Object.keys(posts);
      const postKey = postKeys.find((post) => post === params.id);

      if (postKey) {
        const post = posts[postKey];
        return (
          <div className="card">
            <div className="card-header">Created on {post.date}</div>
            <div className="card-body">
              <h4 className="card-text">{post.title}</h4>
              <p className="card-text">{post.description}</p>
            </div>
            <div className="card-footer py-3">
              <button className="btn btn-danger me-3" onClick={deletePost}>
                Delete
              </button>
              <Link to={`/posts/${params.id}/edit`} className="btn btn-primary">
                Edit
              </Link>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      {postCard()}
      {loading && <Preloader />}
    </>
  );
};

export default Post;
