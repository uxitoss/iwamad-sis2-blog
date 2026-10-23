import { Link, useParams } from 'react-router';
import { posts } from '../data/posts';
import LikeButton from '../components/LikeButton';

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div>
        <h2>No such post</h2>
        <p>There is no post with id "{id}".</p>
        <Link to="/posts">Back to posts</Link>
      </div>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="date">{post.date}</p>
      <p>{post.body}</p>
      <p className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </p>
      <LikeButton postId={post.id} />
      <p>
        <Link to="/posts">Back to posts</Link>
      </p>
    </article>
  );
}

export default PostPage;
