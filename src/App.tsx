import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import PostForm from './containers/PostForm/PostForm';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import NotFound from './containers/NotFound';
import Post from './containers/Post/Post';
import { useState } from 'react';
import { PostList } from './types';

const App = () => {
  const [posts, setPosts] = useState<PostList>();

  return (
    <>
      <header className="bg-success-subtle">
        <Navbar />
      </header>
      <main className="container mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Home addPost={(newPost: PostList) => setPosts(newPost)} />
            }
          />
          <Route
            path="/posts"
            element={
              <Home addPost={(newPost: PostList) => setPosts(newPost)} />
            }
          />
          <Route path="/posts/:id" element={<Post posts={posts} />} />
          <Route path="/new-post" element={<PostForm />} />
          <Route path="/posts/:id/edit" element={<PostForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
