import { HeaderContainer, StyledNavLink } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/user">User Panel</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/some-not-existing-url">
              Example of Not Found Page
            </StyledNavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </HeaderContainer>
  );
};

export default Header;
