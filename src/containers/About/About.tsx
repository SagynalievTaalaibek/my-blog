import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mt-4">
      <h2>Posts</h2>
      <p>
        Welcome to our technology blog! Here, we explore news in the world of technology.
      </p>
      <p>
        Stay updated with the newest releases and advancements in technology.
        Whether it's the latest iPhone, Android device, or other gadgets.
      </p>
      <p>
        Join us on this journey to discover the world of technology.
      </p>
      <Link to="/posts" className="btn btn-primary">
        View Posts
      </Link>
    </div>
  );
};

export default About;