import React, { useState } from 'react';
import axiosApiPost from '../../axiosApiPost';
import Preloader from '../../components/Preloader/Preloader';
import { PostForm } from '../../types';

const AddPost = () => {
  const [post, setPost] = useState<PostForm>({
    title: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    const today = new Date();
    const dateNow = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;

    const postData = { ...post, date: dateNow };

    try {
      await axiosApiPost.post('posts.json', postData);
    } finally {
      setLoading(false);
      setPost({ title: '', description: '' });
    }
  };

  let form = (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          required
          value={post.title}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          required
          value={post.description}
          onChange={onChange}
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );

  if (loading) {
    form = (<Preloader/>);
  }

  return (
    <>
      <h2>Add new Post</h2>
      {form}
    </>
  );
};

export default AddPost;
