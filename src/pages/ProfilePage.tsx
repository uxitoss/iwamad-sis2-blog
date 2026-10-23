import { posts } from '../data/posts';
import { useLikes } from '../context/LikesContext';

function ProfilePage() {
  const { likedIds } = useLikes();
  const likedPosts = posts.filter((post) => likedIds.includes(post.id));

  return (
    <div>
      <h2>My profile</h2>
      <h3>Posts I liked</h3>
      {likedPosts.length === 0 && <p>No liked posts yet.</p>}
      <ul>
        {likedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;
