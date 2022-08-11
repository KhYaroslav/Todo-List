import { useSelector } from 'react-redux';
import AuthForm from '../auth/AuthForm';

export default function RequireAuth({ children }) {
  const user = useSelector((state) => state.user);

  if (!user.id) {
    return <AuthForm />;
  }

  return children;
}
