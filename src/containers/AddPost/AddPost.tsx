import React, { useState } from 'react';
import { PostFormInput } from '../../types';

const AddPost = () => {
  const [post, setPost] = useState<PostFormInput>({
    title: '',
    description: '',
    date: '',
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const today = new Date();
    const dateNow = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;

    setPost((prevState) => ({
      ...prevState,
      date: dateNow,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Add new post</h4>
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
};

export default AddPost;
