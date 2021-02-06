import { Candidate } from '../../types';
import AvailabilityIndicator from '../AvailabilityIndicator';
import { Card } from './CandidateCard.styled';

interface ICandidateCard {
  candidate: Candidate;
}

export default function CandidateCard({ candidate }: ICandidateCard) {
  const {
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

  return (
    <Card>
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
