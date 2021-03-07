import construction from '../images/undraw_QA_engineers_dg5p.svg';
import {
  Hero,
  HomePage,
  Link,
  Navigation,
  NavList
} from './page styles/home.styled';

export default function Home() {
  return (
    <HomePage>
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
      <Hero>
        <h1>Some Cool APP Name</h1>
        <img src={construction} alt='Construction' />
      </Hero>
    </HomePage>
  );
}
