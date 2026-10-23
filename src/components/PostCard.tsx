import { Link } from 'react-router';
import type { Post } from '../data/posts';
import LikeButton from './LikeButton';

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="date">{post.date}</p>
      <p>{post.body.slice(0, 90)}...</p>
      <p className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </p>
      <LikeButton postId={post.id} />
    </article>
  );
}

export default PostCard;
