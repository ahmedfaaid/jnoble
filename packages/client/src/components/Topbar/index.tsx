import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../../images/tyler-nix-PQeoQdkU9jQ-unsplash.jpg';
import { TBar, InputContainer, Icon, UserDetails, PFP } from './Topbar.styled';

interface ITopbarProps {
  page: string;
}

export default function Topbar({ page }: ITopbarProps) {
  return (
    <TBar>
      <h2>{page}</h2>
      <InputContainer>
        <Icon icon={faSearch} />
        <input type='text' placeholder='Search...' />
      </InputContainer>
      <UserDetails>
        <FontAwesomeIcon icon={faBell} />
        <PFP>
          <img src={ProfilePic} alt='Profile Pic' />
        </PFP>
        <h3>Tommy Anderson</h3>
      </UserDetails>
    </TBar>
  );
}
