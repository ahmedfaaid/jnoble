import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const TableWrapper = styled.div`
  width: 80%;
  margin: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      text-align: center;
    }

    thead {
      font-size: 1.6rem;
      margin-bottom: 1rem;

      th {
        padding: 1rem 0;
      }
    }

    tbody {
      font-size: 1.4rem;

      tr td {
        padding: 2rem 0;
      }

      tr:nth-last-of-type(odd) {
        background-color: ${t.colors.white[1]};
      }
    }
  }
`;
