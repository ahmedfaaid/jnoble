import { useState } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { loader } from 'graphql.macro';
import Layout from '../components/layout';
import Pagination from '../components/Pagination';
import { Loading, LoadingWrapper } from '../styles/utils';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../types';

const AllCandidates = loader('../graphql/queries/allCandidates.graphql');

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 65rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Candidates() {
  const [skip, setSkip] = useState(0);
  const [take] = useState(12);

  const { data, loading, error } = useQuery(AllCandidates, {
    variables: {
      skip,
      take
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
      <ContentWrapper>
        {data.allCandidates.items.map((candidate: Candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        ))}
      </ContentWrapper>
      <Pagination
        totalItems={data.allCandidates.count}
        limit={skip}
        setSkip={setSkip}
        take={take}
      />
    </Layout>
  );
}
