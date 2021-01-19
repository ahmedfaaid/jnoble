import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../../images/tyler-nix-PQeoQdkU9jQ-unsplash.jpg';
import { TBar, InputContainer, Icon, UserDetails, PFP } from './Topbar.styled';

export default function Topbar() {
  return (
    <TBar>
      <h2>Dashboard</h2>
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
