import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { StyledButton, HomepageContainer } from "./HomePage.styles";

const HomePage = ({ auth }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   if (!auth) {
  //     navigate("/");
  //   }
  // }, [auth, navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <HomepageContainer>
      <h1>Welcome{id ? `, ${id}!` : "!"}</h1>
      <StyledButton onClick={logout}>Logout</StyledButton>
    </HomepageContainer>
  );
};

export default HomePage;
