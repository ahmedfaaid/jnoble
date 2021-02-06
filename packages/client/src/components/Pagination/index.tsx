import { useState, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { Paginate } from './Pagination.styled';

interface IPaginationProps {
  totalItems: number;
  limit: number;
  setSkip: Dispatch<SetStateAction<number>>;
  take?: number;
}

export default function Pagination({
  totalItems,
  limit,
  setSkip,
  take = 12
}: IPaginationProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(totalItems / take!);
  // const maxPages = Math.ceil(limit / take!);

  const prevPage = () => {
    if (limit) {
      setSkip((prev: number) => prev - take!);
      setPage(prev => prev - 1);
    } else {
      return;
    }
  };

  const nextPage = () => {
    if (totalItems - limit > take!) {
      setSkip((prev: number) => prev + take!);
      setPage(prev => prev + 1);
    } else if (totalItems - limit <= take!) {
      return;
    }
  };

  return (
    <Paginate>
      <button onClick={() => prevPage()} disabled={!limit}>
        <FontAwesomeIcon icon={faChevronLeft} /> Prev
      </button>
      <div>
        <p>
          Page <span>{page}</span> of <span>{totalPages}</span>
        </p>
      </div>
      <button onClick={() => nextPage()} disabled={totalItems - limit <= take!}>
        Next <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </Paginate>
  );
}
