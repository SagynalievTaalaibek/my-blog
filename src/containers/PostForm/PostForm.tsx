import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApiPost from '../../axiosApiPost';
import Preloader from '../../components/Preloader/Preloader';
import { PostForm } from '../../types';

const PostForm = () => {
  const [post, setPost] = useState<PostForm>({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const fetchPost = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const response = await axiosApiPost.get<PostForm>(
        'posts/' + id + '.json',
      );
      if (response.data) {
        setPost(response.data);
      }
    } catch (e) {
      alert('Error' + e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.id) {
      void fetchPost(params.id);
    }
  }, [params.id, fetchPost]);

  const onSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    const today = new Date();
    const dateNow = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;

    const postData = { ...post, date: dateNow };

    try {
      if (params.id) {
        await axiosApiPost.put('posts/' + params.id + '.json', postData);
      } else {
        await axiosApiPost.post('posts.json', postData);
      }
    } finally {
      setLoading(false);
      navigate('/');
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
    form = <Preloader />;
  }

  let title = 'Add';

  if (params.id) {
    title = 'Edit post';
  }

  return (
    <>
      <h2>{title}</h2>
      {form}
    </>
  );
};
export default PostForm;
