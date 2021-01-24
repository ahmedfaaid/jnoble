import { Column } from 'react-table';
import { Candidate } from '../types';

export const COLUMNS: Column<Candidate>[] = [
  {
    Header: 'ID',
    accessor: 'id' as keyof Candidate
  },
  {
    Header: 'First Name',
    accessor: 'firstName' as keyof Candidate
  },
  {
    Header: 'Last Name',
    accessor: 'lastName' as keyof Candidate
  },
  {
    Header: 'Phone',
    accessor: 'phone' as keyof Candidate
  },
  {
    Header: 'Email',
    accessor: 'email' as keyof Candidate
  }
];
