import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../service/storage";
import { LoginDTO } from "../../models/api/login";

// import { Container } from './styles';

const UseHome = () => {
  const [login, setLogin] = useState<LoginDTO>();
  useEffect(() => {
    getLocalStorage<LoginDTO>("login").then((value) => {
      if (value) setLogin(value);
    });
  });

  return { login };
};

export default UseHome;
