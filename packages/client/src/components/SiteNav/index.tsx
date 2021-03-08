import { DomLink, Link, Navigation, NavList } from './SiteNav.styled';

export default function SiteNav() {
  return (
    <Navigation>
      <nav>
        <div>
          <h2>
            <DomLink to='/'>SOME COOL APP NAME</DomLink>
          </h2>
        </div>
        <NavList>
          <li>
            <Link to='/'>Home</Link>
          </li>
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
