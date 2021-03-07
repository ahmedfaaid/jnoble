import { useState, Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import AppLayout from '../components/appLayout';
import Pagination from '../components/Pagination';
import { Loading, LoadingWrapper } from '../styles/utils';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../types';
import Modal from '../components/Modal';
import { ContentWrapper } from './page styles/candidates.styled';

const AllCandidates = loader('../graphql/queries/allCandidates.graphql');

export default function Candidates() {
  const [skip, setSkip] = useState(0);
  const [take] = useState(12);
  const [detailedCandidate, setDetailedCandidate] = useState<number>();
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { data, loading, error } = useQuery(AllCandidates, {
    variables: {
      skip,
      take
    }
  });

  if (loading) {
    return (
      <AppLayout page='Candidates'>
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
        <Pagination totalItems={0} limit={skip} setSkip={setSkip} />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout page='Candidates'>
        <h1>Error...</h1>
      </AppLayout>
    );
  }

  return (
    <AppLayout page='Candidates'>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        candidate={detailedCandidate}
      />
      <ContentWrapper>
        {data.allCandidates.items.map((candidate: Candidate) => (
          <Fragment key={candidate.id}>
            <CandidateCard
              candidate={candidate}
              selectedCandidates={selectedCandidates}
              setSelectedCandidates={setSelectedCandidates}
              setDetailedCandidate={setDetailedCandidate}
              open={modalOpen}
              setOpen={setModalOpen}
            />
          </Fragment>
        ))}
      </ContentWrapper>
      <Pagination
        totalItems={data.allCandidates.count}
        limit={skip}
        setSkip={setSkip}
        take={take}
      />
    </AppLayout>
  );
}
