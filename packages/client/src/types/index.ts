export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
  address: Address;
  available: boolean;
}

interface Address {
  city: string;
  province: Province;
  country: string;
}

interface Province {
  name: string;
}
