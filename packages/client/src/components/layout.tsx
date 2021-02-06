import { ReactNode } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: ReactNode;
  page: string;
}

const PageLayout = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  margin-left: 35rem;
`;

export default function Layout({ children, page }: LayoutProps) {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
          rel='stylesheet'
        />
        <title>{page} - JNoble</title>
      </Helmet>
      <div>
        <PageLayout>
          <Sidebar />
          <Content>
            <Topbar page={page} />
            <main>{children}</main>
          </Content>
        </PageLayout>
      </div>
    </>
  );
}
