import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme as t } from '../../styles/Theme';

export const TBar = styled.header`
  height: 8rem;
  width: 100%;
  background-color: ${t.colors.white[1]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${t.shadow};

  h2 {
    margin-left: 5rem;
    font-size: 2.6rem;
    color: ${t.colors.primary[2]};
  }
`;

export const InputContainer = styled.div`
  position: relative;

  input {
    background-color: ${t.colors.white[3]};
    color: ${t.colors.primary[1]};
    width: 50rem;
    padding: 1.3rem 2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    text-indent: 2rem;

    &::placeholder {
      color: ${t.colors.primary[1]};
      opacity: 0.3;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  color: ${t.colors.primary[2]};
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5rem;

  svg {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${t.colors.primary[1]};
  }
`;

export const PFP = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 3rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-position: center -1rem;
  }
`;
