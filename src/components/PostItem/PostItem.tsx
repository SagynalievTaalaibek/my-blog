import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  date: string;
}

const PostItem: React.FC<Props> = ({ title, date, id }) => {
  return (
    <div className="card mb-2">
      <div className="card-header">
        <p className="card-text">{date}</p>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <Link to={'/posts/' + id} className="btn btn-primary mt-3">Read more &gt;&gt;</Link>
      </div>
    </div>
  );
};

export default PostItem;
