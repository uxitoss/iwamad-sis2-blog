import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

function SignInPage() {
  const { isSignedIn, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    signIn();
    navigate('/profile');
  }

  if (isSignedIn) {
    return (
      <div>
        <h2>You are signed in</h2>
        <button type="button" onClick={signOut}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Sign in</h2>
      <p>You need to sign in to see your profile.</p>
      <button type="button" onClick={handleSignIn}>Sign in</button>
    </div>
  );
}

export default SignInPage;
