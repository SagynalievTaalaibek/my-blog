export interface PostForm {
  title: string;
  description: string;
}

export interface Post {
  title: string;
  date: string;
  description: string;
}

export interface PostList {
  [id: string]: Post;
}

