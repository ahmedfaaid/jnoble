import SiteLayout from '../components/siteLayout';
import construction from '../images/undraw_QA_engineers_dg5p.svg';
import { Hero } from './page styles/home.styled';

export default function Home() {
  return (
    <SiteLayout page='Home'>
      <Hero>
        <h1>Some Cool APP Name</h1>
        <img src={construction} alt='Construction' />
      </Hero>
    </SiteLayout>
  );
}
