import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import CandidateTable from '../components/CandidateTable';
import Layout from '../components/layout';
import Pagination from '../components/Pagination';
import { Loading, LoadingWrapper } from '../styles/utils';

const AllCandidates = gql`
  query($skip: Int) {
    allCandidates(skip: $skip) {
      items {
        id
        firstName
        lastName
        phone
        email
      }
      count
    }
  }
`;

export default function Candidates() {
  const [skip, setSkip] = useState(0);

  const { data, loading, error } = useQuery(AllCandidates, {
    variables: {
      skip
    }
  });

  if (loading) {
    return (
      <Layout page='Candidates'>
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
        <Pagination totalItems={0} limit={skip} setSkip={setSkip} />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout page='Candidates'>
        <h1>Error...</h1>
      </Layout>
    );
  }

  return (
    <Layout page='Candidates'>
      <CandidateTable candidates={data.allCandidates.items} />
      <Pagination
        totalItems={data.allCandidates.count}
        limit={skip}
        setSkip={setSkip}
      />
    </Layout>
  );
}
