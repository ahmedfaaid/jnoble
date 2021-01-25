import { useQuery } from 'urql';
import CandidateTable from '../components/CandidateTable';
import Layout from '../components/layout';

const AllCandidates = `
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
  const [result] = useQuery({
    query: AllCandidates
  });

  const { data, fetching, error } = result;

  console.log(data);

  if (fetching) {
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
      <h1>Candidates page</h1>
      {/* <p>{JSON.stringify(data, null, 4)}</p> */}
      <CandidateTable candidates={data.allCandidates} />
    </Layout>
  );
}
