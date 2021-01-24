import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from '../../table/columns';
import { Candidate } from '../../types';

interface ICandidateTableProps {
  candidates: Candidate[];
}

export default function CandidateTable({ candidates }: ICandidateTableProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => candidates, []);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
