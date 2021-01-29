import { useState } from 'react';

interface IPaginationProps {
  totalItems: number;
  limit: number;
  // TODO: fix the setSkip type
  setSkip: any;
}

export default function Pagination({
  totalItems,
  limit,
  setSkip
}: IPaginationProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(totalItems / 10);
  const maxPages = Math.ceil(limit / 10);

  const prevPage = () => {
    setSkip((prev: number) => prev - 10);
    setPage(prev => prev - 1);
  };

  const nextPage = () => {
    setSkip((prev: number) => prev + 10);
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <button onClick={() => prevPage()}>Prev</button>
      <div>
        <p>
          Page <span>{page}</span> of <span>{totalPages}</span>
        </p>
      </div>
      <button onClick={() => nextPage()}>Next</button>
    </div>
  );
}
