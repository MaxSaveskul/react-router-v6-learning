import { useState, useEffect, useRef } from "react";
import { Input, FormContainer, Button } from "./LoginPage.styles";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ auth }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (auth) {
      navigate("/user");
    }
  }, [auth, navigate]);

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSumbit = (event) => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    navigate(`/user/${login}`);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSumbit}>
      <FormContainer>
        <Input placeholder="login" value={login} onChange={handleLogin} />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <Button type="submit">Submit</Button>
      </FormContainer>
    </form>
  );
};

export default LoginPage;
