import LoginForm from '../components/LoginForm';
import SiteLayout from '../components/siteLayout';
import { LoginPage } from './page styles/login.styled';

export default function Login() {
  return (
    <SiteLayout page='Login'>
      <LoginPage>
        <LoginForm />
      </LoginPage>
    </SiteLayout>
  );
}
