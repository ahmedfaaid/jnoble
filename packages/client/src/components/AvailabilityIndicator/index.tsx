import { Indicator } from './AvailabilityIndicator.styled';

interface IAvailabilityIndicator {
  available: boolean;
}

export default function AvailabilityIndicator({
  available
}: IAvailabilityIndicator) {
  return <Indicator available={available} />;
}
