import { useParams } from 'react-router-dom';

const Post = () => {
  const params = useParams();

  return (
    <div>
      Post full body {params.id}
    </div>
  );
};

export default Post;