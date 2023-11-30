import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import AddPost from './containers/AddPost/AddPost';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import NotFound from './containers/NotFound';
import Post from './containers/Post/Post';

const App = () => {
  return (
    <>
      <header className="bg-success-subtle">
        <Navbar />
      </header>
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/new-post" element={<AddPost />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
