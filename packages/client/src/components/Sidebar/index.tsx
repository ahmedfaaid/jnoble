import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBriefcase,
  faUserFriends,
  faEnvelope,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { SideBarMenu, MenuList, MenuLink } from './Sidebar.styled';

export default function Sidebar() {
  return (
    <SideBarMenu>
      <h1>Recruiter</h1>
      <nav>
        <MenuList>
          <li>
            <MenuLink to='/'>
              <div>
                <FontAwesomeIcon icon={faHome} />
              </div>
              <span>Dashboard</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/jobs'>
              <div>
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <span>Jobs</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/candidates'>
              <div>
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <span>Candidates</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/messages'>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span>Messages</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/settings'>
              <div>
                <FontAwesomeIcon icon={faCog} />
              </div>
              <span>Settings</span>
            </MenuLink>
          </li>
        </MenuList>
      </nav>
    </SideBarMenu>
  );
}
