export interface PostForm {
  title: string;
  description: string;
}

export interface Post {
  title: string;
  date: string;
  description: string;
}

interface PostList {
  [id: string]: Post;
}
