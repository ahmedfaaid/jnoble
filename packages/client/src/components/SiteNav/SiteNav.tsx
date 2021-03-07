import { Link, Navigation, NavList } from './SiteNav.styled';

export default function SiteNav() {
  return (
    <Navigation>
      <nav>
        <NavList>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up</Link>
          </li>
        </NavList>
      </nav>
    </Navigation>
  );
}
