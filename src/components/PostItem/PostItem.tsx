import { PostHome } from '../../types';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  post: PostHome;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-text">{post.date}</p>
      </div>
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <Link to={'/posts/' + post.id} className="btn btn-primary mt-3">Read more &gt;&gt;</Link>
      </div>
    </div>
  );
};

export default PostItem;
