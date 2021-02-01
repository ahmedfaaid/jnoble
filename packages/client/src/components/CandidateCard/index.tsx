import { Candidate } from '../../types';
import { Card } from './CandidateCard.styled';

interface ICandidateCard {
  candidate: Candidate;
}

export default function CandidateCard({ candidate }: ICandidateCard) {
  const { firstName, lastName, jobTitle, phone, email, address } = candidate;
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
    </Card>
  );
}
