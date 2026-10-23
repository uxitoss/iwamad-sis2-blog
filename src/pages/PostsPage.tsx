import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function PostsPage() {
  return (
    <div>
      <h2>Posts</h2>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
