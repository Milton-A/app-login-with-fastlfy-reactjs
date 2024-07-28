import { useCallback, useState } from "react";
import { getLocalStorage } from "../../service/storage";
import { LoginDTO } from "../../models/api/login";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

const UseHome = () => {
  const [login, setLogin] = useState<LoginDTO>();

  const navigateTo = useNavigate();

  const getData = () => {
    getLocalStorage("login").then((value) => {
      setLogin(value.user);
    });
  };

  const handleNavigate = useCallback(() => {
    navigateTo("/");
  }, [navigateTo]);

  return { login, getData, handleNavigate };
};

export default UseHome;
