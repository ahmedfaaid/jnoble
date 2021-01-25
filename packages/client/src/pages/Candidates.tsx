import { useQuery, gql } from '@apollo/client';
import CandidateTable from '../components/CandidateTable';
import Layout from '../components/layout';

const AllCandidates = gql`
  query {
    allCandidates {
      id
      firstName
      lastName
      phone
      email
    }
  }
`;

export default function Candidates() {
  const { data, loading, error } = useQuery(AllCandidates);

  console.log(data);

  if (loading) {
    return (
      <Layout page='Candidates'>
        <h1>Loading...</h1>
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
      <CandidateTable candidates={data.allCandidates} />
    </Layout>
  );
}
