import { Link } from 'react-router';

function HomePage() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>
        Hi! I am Veronika, a third-year student at SITE. This is my small blog
        about studying, code and life in Almaty.
      </p>
      <Link to="/posts">Read the posts</Link>
    </div>
  );
}

export default HomePage;
