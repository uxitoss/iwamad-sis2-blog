import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
