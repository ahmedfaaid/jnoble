import { Dispatch, SetStateAction } from 'react';
import { Candidate } from '../../types';
import AvailabilityIndicator from '../AvailabilityIndicator';
import { Card } from './CandidateCard.styled';

interface ICandidateCard {
  candidate: Candidate;
  selectedCandidates: number[];
  setSelectedCandidates: Dispatch<SetStateAction<number[]>>;
}

export default function CandidateCard({
  candidate,
  selectedCandidates,
  setSelectedCandidates
}: ICandidateCard) {
  const {
    id,
    firstName,
    lastName,
    jobTitle,
    phone,
    email,
    address,
    available
  } = candidate;
  const { city, province, country } = address;
  const { name: prov } = province;

  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      if (
        selectedCandidates.length > 0 &&
        !selectedCandidates.includes(parseInt(value))
      ) {
        setSelectedCandidates(prev => [...prev, parseInt(value)]);
      } else if (
        selectedCandidates.length > 0 &&
        selectedCandidates.includes(parseInt(value))
      ) {
        return;
      } else {
        setSelectedCandidates([parseInt(value)]);
      }
    } else if (!checked) {
      if (
        selectedCandidates.length > 0 &&
        selectedCandidates.includes(parseInt(value))
      ) {
        setSelectedCandidates(prev =>
          prev.filter(id => id !== parseInt(value))
        );
      } else {
        return;
      }
    }
  };

  return (
    <Card>
      <input
        type='checkbox'
        name='candidate'
        id='candidate'
        value={id}
        onChange={e => handleChange(e.target.value, e.target.checked)}
      />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{jobTitle}</p>
      <p>
        {city}, {prov}, {country}
      </p>
      <p>{phone}</p>
      <p>{email}</p>
      <AvailabilityIndicator available={available} />
    </Card>
  );
}
